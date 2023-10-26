import React, { useEffect, useReducer, useState } from "react";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import Axios from "axios";
import SignUp from "./SignUp";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import close from "../../assets/x.png"
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [action, setAction] = useState("LogIn");
  const [res, setRes] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();


  const notifySuccess = () => toast.success("Login Sucessfull");
  const notifyError = () => toast.error("Login Faild");
  const notifyFieldEmpty = () => toast.error('Field cannot be empty');

  // useEffect(() => {
  //   Axios.get("http://localhost:8000/getUsers").then(user => {
  //     console.log(user.data)
  //     return user.data
  //   }).then(data => {
  //     const [val,obj] = searchEmail(data,enteredEmail);
  //     const result = val && (searchPassword(data,enteredPassword)) ? true : false;
  //     if(result) {
  //       notifySuccess()
  //     }
  //     else {
  //       notifyError()
  //     }
  //   })
  // },[enteredEmail, enteredPassword])
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  const submitHandler = async (event) => {

    event.preventDefault();
     await Axios.get("http://localhost:8000/getUsers")
      .then(async (user) => {
        console.log(user.data.data);
        const [val,name,obj] =  searchEmail(user.data.data, enteredEmail)
        const result =
           val &&
          ( searchPassword(user.data.data, enteredPassword))
            ? true
            : false;
        console.log(result);
        if (result) {
          notifySuccess();
          localStorage.setItem('user',name)
          setLogin(true)
          console.log(obj + "1")
          if(obj.isAdmin){

            localStorage.setItem('admin',obj.isAdmin)
          }
          else {
            localStorage.setItem('admin',false)
          }
          navigate("/")

          setRes(true)
        } else {
          notifyError();
          setRes(false)
        }
      })
      .catch((err) => console.log(err));

  };
  function searchEmail(obj, targetValue) {
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].email === targetValue) {
        return [true, obj[i].name,obj[i]];
        // return [true,obj[i]];
      }
    }
  }
  function searchPassword(obj, targetValue) {
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].password === targetValue) {
        return true;
      }
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
  
  console.log(res)
  return (
    <section id={classes.login} style={{ display: res ? "none" : "" }}>
      {action === "LogIn" ? (
        <div className={`${classes.container} ${classes.login}`}>
          <img src={close} className={classes.close} onClick={props.loginPageHandler}/>
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
              <span className={classes.break} onClick={actionHandler}>Create Your Account</span>
             
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
