import React, { useEffect, useState } from "react";
import AppartmentRegisteration from "../User/AppartmentRegisteration";
import up from "../../assets/up.png";
import Button from "../UI/Button/Button";
import classes from "./Intro.module.css"
function Intro(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 123) setCount((prev) => prev + 1);
    }, 10);
    return () => clearInterval(interval, 20);
  }, [count]);

  return (
    <section id={classes.intro}>
      <div className={classes.introcontent}>
        <span className={classes.content}>
          Managing societies has never been easier
        </span>
        <h1 className={classes.hello}>Welcome to <span>Gate guardians</span></h1>
        <span className={classes.innercontent}>
          Explore our Website and Explore your safety
        </span>
        <Button className={classes.register} onClick={props.registerPageHandler}>Register</Button>
        {/* <h2>{count}</h2> */}
      </div>
      <a href="#">
        <button className={classes.posTop}>
          <img src={up} className={classes.upArrow} alt="" />
        </button>
      </a>
      {props.showRegisterPage && <AppartmentRegisteration />}
    </section>
  );
}

export default Intro;
