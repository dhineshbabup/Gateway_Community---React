import React, { useState, useRef } from "react";
import FIcon from "../../assets/facebook-icon.png";
import IIcon from "../../assets/instagram.png";
import TIcon from "../../assets/twitter.png";
import YIcon from "../../assets/youtube.png";
import Button from "../UI/Button/Button";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";

import Popup from "../Popup/Popup";
function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_biurh3o",
        "template_et85d1m",
        form.current,
        "S3cLpHwfrNDzXUzcX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {" "}
      <section id={classes.contactPage}>
        <div className={classes.contactTitle}>
          <span style={{ color: "#0066ff" }}>Contact</span> Me
        </div>
        <div className={classes.conatctDec}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis
          id non quae, consectetur ex!
        </div>
        <form ref={form} className={classes.contactForm} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className={classes.name}
            placeholder="Your Name"
          />
          <input
            type="text"
            name="from_email"
            className="email"
            placeholder="Your Email"
          />
          <textarea rows="8" name="message" className="message"></textarea>
          <Button type="submit" className={classes.submitBtn}>
            Submit
          </Button>

          <div className={classes.links}>
            <img src={FIcon} alt="" />
            <img src={TIcon} alt="" />
            <img src={YIcon} alt="" />
            <img src={IIcon} alt="" />
          </div>
        </form>
      </section>
      <Popup trigger={showPopup} setTrigger={setShowPopup}>
        <h2>Details Sent.</h2> <hr /> <br />
        <p>Your Details has sent.</p>
      </Popup>
    </>
  );
}

export default Contact;
