import React, { useState } from "react";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import Axios from "axios";
import SignUp from "./SignUp";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import close from "../../assets/x.png"
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [action, setAction] = useState("LogIn");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();


  const notifySuccess = () => toast.success("Login Sucessfull");
  const notifyError = () => toast.error("Login Faild");
  const notifyFieldEmpty = () => toast.error('Field cannot be empty');

  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await Axios.post("http://localhost:8000/login",{enteredEmail, enteredPassword})
    // const length = Object.keys(data.data).length;
    const length = data.data.data.length
    if(length > 0) {
    const d = data.data.data
    if(d[0].password === enteredPassword) {
      notifySuccess();
      localStorage.setItem('user',d[0].name)
          if(d[0].isAdmin){
            localStorage.setItem('admin',"admin")
          }
          else {
            localStorage.setItem('admin',"notAdmin")
          }
          if(d[0].isSecurity){
            localStorage.setItem('security',"security")
          }
          else {
            localStorage.setItem('security',"notSecurity")
          }
          navigate("/")
    }
    else {
      notifyError()
    }
  }
  else {
    notifyError()
  }
  }
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const actionHandler = () => {
    if (action === "LogIn") {
      setAction("SignUp");

    } else {
      setAction("LogIn");
    }
  };
  
  return (
    <section id={classes.login}>
      {action === "LogIn" ? (
        <div className={`${classes.container} ${classes.login}`}>
          <img src={close} className={classes.close} onClick={() => navigate("/")}/>
          <p className={classes.welcome}>Welcome Back cheaf!!</p>
          <h1 className={classes.heading}>{action}</h1>
          <form className={classes.loginForm} onSubmit={submitHandler}>
            <div
              className={`${classes.control} ${
                emailIsValid === false ? classes.invalid : ""
              }`}
            >
              <input
                type="email"
                placeholder="Email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </div>
            <div
              className={`${classes.control} ${
                passwordIsValid === false ? classes.invalid : ""
              }`}
            >
              <input
                type="password"
                placeholder="Password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            {action === "LogIn" ? (
              <span className={classes.forgotPass}>forgot Password?</span>
            ) : null}
            <br />
              <Button
                className={classes.loginbtn}
                type="submit"
                onClick={() => setAction('LogIn')}
              >
                LogIn
              </Button>
              <Link to='/signup'><span className={classes.break} onClick={actionHandler}>Create Your Account</span></Link>
             
          </form>
        </div>
      ) : (
        <SignUp action={action} loginPageHandler={props.loginPageHandler}actionHandler={actionHandler} />
      )}
      <ToastContainer />
    </section>
  );
};

export default Login;
