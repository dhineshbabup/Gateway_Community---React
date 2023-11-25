import Navbar from "./components/Navbar/Navbar";
import { useState, useContext } from "react";
import Login from "./components/Login/Login";
import User from "./components/User/User";

import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthContext from "../src/Context/auth-context";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import SecurityForm from "./components/Forms/SecurityForm";
import SignUp from "./components/Login/SignUp";

function App() {
  const [mode, setMode] = useState(true);
  const ctx = useContext(AuthContext);

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <BrowserRouter>
      <Navbar
        mode={mode}
        changeMode={changeMode}
        loginPageHandler={ctx.setLoginPageHandler}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/request" element={<SecurityForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//https://unsplash.com/s/photos/apartments
