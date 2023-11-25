import React from "react";
import { useState  } from "react";

import Intro from "./Intro/Intro";
import Service from "./OurService/Service";
import Customer from "./CustomerReview/Customer";
import MiddleHelp from "./Helpers/MiddleHelp";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
function HomePage() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showRegisterPage, setShowRegisterPage] = useState(false);
  const loginPageHandler = () => {
    setShowLoginPage(!showLoginPage);
  };
  const registerPageHandler = () => {
    setShowRegisterPage(!showRegisterPage);
  };
  return (
    <div>
     
      {showLoginPage && <Login loginPageHandler={loginPageHandler} />}
      <Intro
        registerPageHandler={registerPageHandler}
        showRegisterPage={showRegisterPage}
      />
      <Service />
      <Customer />
      <MiddleHelp />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
