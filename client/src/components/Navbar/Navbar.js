import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Sun from "../../assets/sun1.png";
import Moon from "../../assets/moon.png";
import menu from "../../assets/menu.png";
import { FaHome } from "react-icons/fa";

import Button from "../UI/Button/Button";
function Navbar({ mode, changeMode, loginPageHandler }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem('user')
  const signOut = () => {
    localStorage.removeItem('user')
  }
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="navItems">
        <Link to='/' className="navItem">Home</Link>
        <Link to='/user' className="navItem">Users</Link>
        <Link to='/contact' className="navItem">Contact Us</Link>
        <Link to='/' className="navItem">About</Link>

        {/* <img
          src={mode ? Moon : Sun}
          onClick={changeMode}
          className="mode"
          alt=""
        /> */}
      </div>
      {user ?
      <Link className="profile-card" to='/profile'>{user}</Link> :
      <Button onClick={() => navigate('/login')}>LogIn</Button>
      }
      <img
        src={menu}
        alt=""
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <a href="/" className="listItem" onClick={() => setShowMenu(false)}>
          Home
        </a>
        <a href="/" className="listItem" onClick={() => setShowMenu(false)}>
          Services
        </a>
        <a href="/" className="listItem" onClick={() => setShowMenu(false)}>
          Contact Us
        </a>
        <a href="/" className="listItem" onClick={() => setShowMenu(false)}>
          About
        </a>
        <button className="loginBtn">LogIN</button>
      </div>
    </nav>
  );
}

export default Navbar;
