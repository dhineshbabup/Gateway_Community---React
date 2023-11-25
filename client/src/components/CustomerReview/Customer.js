import React from "react";
import classes from "./Customer.module.css";
import Dhinesh from "../../assets/dhinesh.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function Customer() {
  return (
    <section id={classes.customersReview}>
      <h2 className={classes.title}>
        What our <span style={{ color: "#0066ff" }}>customers say</span>
      </h2>
      <div className={classes.customers}>
        <div
          className={classes.customer}
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className={classes.customerImgs}></div>
          <img src={Dhinesh} alt="" className={classes.customerImg} />
          <h4 className={classes.customername}>Aravind</h4>
          <p className={classes.customerprofession}>Student</p>
          <p className={classes.review}>
            With GG, we were able to streamline our invoice generation, receipt
            generation and other accounting processes. Our auditor is also
            pleased as it integrates with softwares like Tally.
          </p>
        </div>
        <div
          className={classes.customer}
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className={classes.customerImgs}></div>
          <img src={Dhinesh} alt="" className={classes.customerImg} />
          <h4 className={classes.customername}>Dhinesh</h4>
          <p className={classes.customerprofession}>Student</p>
          <p className={classes.review}>
            An all-in-one solution for societies. Our residents feel more secure
            with children playing without supervision and the committee also
            finds it easier to manage finances and communication.
          </p>
        </div>
        <div
          className={classes.customer}
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className={classes.customerImgs}></div>
          <img src={Dhinesh} alt="" className={classes.customerImg} />
          <h4 className={classes.customername}>Vathsa</h4>
          <p className={classes.customerprofession}>Student</p>
          <p className={classes.review}>
            The connectivity with the guards was a big issue earlier. Thanks to
            MyGate, we are now in a situation where we get to know about each
            and every visitor personnel.
          </p>
        </div>
      </div>
      {AOS.init()}
    </section>
  );
}

export default Customer;
