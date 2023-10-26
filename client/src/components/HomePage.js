import React from "react";
import { useState  } from "react";
// import { useContext } from "react";
// import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import Service from "./OurService/Service";
import Customer from "./CustomerReview/Customer";
import MiddleHelp from "./Helpers/MiddleHelp";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
// import AuthContext from "../Context/auth-context";
import SecurityForm from "./Forms/SecurityForm";
function HomePage() {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showRegisterPage, setShowRegisterPage] = useState(false);
  // const ctx = useContext(AuthContext)
  const loginPageHandler = () => {
    setShowLoginPage(!showLoginPage);
  };
  const registerPageHandler = () => {
    setShowRegisterPage(!showRegisterPage);
  };
  return (
    <div>
      {/* <Navbar
        mode={mode}
        changeMode={changeMode}
        loginPageHandler={loginPageHandler}
      /> */}
      {showLoginPage && <Login loginPageHandler={loginPageHandler} />}
      <SecurityForm />
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
