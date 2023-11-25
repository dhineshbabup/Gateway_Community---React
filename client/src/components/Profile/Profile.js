import React from 'react'
import classes from "./Profile.module.css"
import menu from "../../assets/menu.png"
import profile from "../../assets/Default_pfp.svg"
import Arrow from "../../assets/arrow.png"
import Button from "../UI/Button/Button"
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Profile = () => {
  const navigate = useNavigate()
  const name = localStorage.getItem('user')
  const signOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('admin')
    navigate("/")
  }
  return (
    <div  className={classes['profile-container']}>
      <div  className={classes['profile-box']}>
        {/* <img src={menu} className={classes['menu-icon']} alt="" /> */}
        <img src={profile} className={classes['profile-pic']} alt="" />
        <h3>{name ? name : ''}</h3>
        <div className={classes['social-media']}>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <Button onClick={signOut}>SignOut</Button>
         <div className={classes['profile-bottom']}>
          <img src={Arrow} alt="" />
         </div>
        
      </div>
      
    </div>
  )
}

export default Profile
