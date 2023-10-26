import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import close from "../../assets/x.png"
const SignUp = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [age, setAge] = useState();
  const notifySuccess = () => toast.success("Sucessfully Registerd");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submited");
    const password =
      enteredPassword === confirmPassword
        ? enteredPassword
        : alert("incoreectPassword");
    const name = enteredName;
    const email = enteredEmail;
    Axios.post("http://localhost:8000/createUser", { name, email, password, age })
      .then((res) => {
        if(res.data === 'data submitted') {
          notifySuccess();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id={classes.login}>
      <div className={`${classes.container} ${classes.login}`}>
      <img src={close} className={classes.close} onClick={props.loginPageHandler}/>
        <h1 className={classes.heading}>{props.action}</h1>
        <form className={classes.loginForm} onSubmit={submitHandler}>
          <div className={classes.control}>
            <input
              type="text"
              placeholder="YourName"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <input
              type="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <input
              type="password"
              placeholder="Enter Password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <input
              type="password"
              placeholder="Re-Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          
          <Button
            className={classes.signinBtn}
            type="submit"
            // onClick={props.actionHandler}
          >
            SignUp
          </Button>
          <span className={classes.break} onClick={props.actionHandler}>Already have an Account</span>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
