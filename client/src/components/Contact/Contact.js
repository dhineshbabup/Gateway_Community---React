import React from "react";
import FIcon from "../../assets/facebook-icon.png";
import IIcon from "../../assets/instagram.png";
import TIcon from "../../assets/twitter.png";
import YIcon from "../../assets/youtube.png";
import Button from "../UI/Button/Button";
import classes from "./Contact.module.css";
function Contact() {
  return (
    <section id={classes.contactPage}>
      <div className={classes.contactTitle}>
        <span style={{ color: "#0066ff" }}>Contact</span> Me
      </div>
      <div className={classes.conatctDec}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis
        id non quae, consectetur ex!
      </div>
      <form action="" className={classes.contactForm}>
        <input type="text" className={classes.name} placeholder="Your Name" />
        <input type="text" className="email" placeholder="Your Email" />
        <textarea rows="8" className="message"></textarea>
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
  );
}

export default Contact;
