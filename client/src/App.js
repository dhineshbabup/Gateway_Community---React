
import Navbar from "./components/Navbar/Navbar";
import { useState, useContext } from "react";
import Login from "./components/Login/Login"
import User from "./components/User/User";

import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthContext from "../src/Context/auth-context"
import Contact from "./components/Contact/Contact";

function App() {
  const [mode, setMode] = useState(true);
  const ctx = useContext(AuthContext)
  console.log(ctx)
  

  const changeMode = () => {
    setMode(!mode);
  };
  
  // const [showRegisterPage, setShowRegisterPage] = useState(false);

  
  // const registerPageHandler = () => {
  //   setShowRegisterPage(!showRegisterPage)
  // }
  return (
    // <div className={mode ? "light" : "dark"}>
    //    {ctx.showLoginPage && <Login loginPageHandler={ctx.setLoginPageHandler}/>}
    //    <HomePage />
    //    {/* <RouterProvider router={router}/> */}
    
    //  </div>
    <BrowserRouter>
      <Navbar mode={mode} changeMode={changeMode} loginPageHandler={ctx.setLoginPageHandler} />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<User />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;

//https://unsplash.com/s/photos/apartments
