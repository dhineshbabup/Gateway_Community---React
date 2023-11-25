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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    mobilenumber: "",
    flatno: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if(enteredPassword === confirmPassword) {
      setFormData((prev) => {
        return {
          ...prev,
          password: enteredPassword
        };
      });

    }
  };
  const notifySuccess = () => toast.success("Sucessfully Registerd");
  const submitHandler = async (event) => {
    event.preventDefault();

    const data =
      enteredPassword === confirmPassword
        ?
    await Axios.post("http://localhost:8000/createUser",formData) : alert('incorrect password');
    if(data.data.success) {
      notifySuccess()

    }
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
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className={classes.control}>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className={classes.control}>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <input
              type="password"
              placeholder="Re-Enter Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <input
              type="number"
              placeholder="Age"
              onChange={handleChange}
              name="age"
            />
          </div>
          <div className={classes.control}>
            <input
              type="text"
              placeholder="Gender"
              onChange={handleChange}
              name="gender"
            />
          </div>
          <div className={classes.control}>
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobilenumber"
              onChange={handleChange}
            />
          </div>
          
          <Button
            className={classes.signinBtn}
            type="submit"
          >
            SignUp
          </Button>
          <span className={classes.break} onClick={props.actionHandler}>Already have an Account?</span>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
