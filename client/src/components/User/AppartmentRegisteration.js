import React from 'react'
import classes from "./AppartmentRegisteration.module.css"
import Button from '../UI/Button/Button'
import Axios from "axios"
const AppartmentRegisteration = () => {
    const submitHandler = (e) => {
        e.preventDefault();

        Axios.post("http://localhost:8000/createAppartment", { appartmentName, appartmentAddress, mobileNumber, ownerName, id, email, password }).then((res) => console.log(res)).catch(err => console.log(err))
    }
    let appartmentName = '', appartmentAddress = '', mobileNumber = '', ownerName = '', id = '', email = '', password = '';
  return (
    <div className={classes.appartment}>
        <form className={classes.form} onSubmit={submitHandler}>
            <h1 className={classes.heading}><span>Appartment</span> Registeration</h1>
            <div className={classes.control}>
                <label htmlFor="">Appartment Name</label>
                <input type="text" onChange={(e) => appartmentName = e.target.value}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Address</label>
                <input type="text" onChange={(e) => appartmentAddress = e.target.value}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Mobile Number</label>
                <input type="number" onChange={(e) => mobileNumber = e.target.value}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Owner Name</label>
                <input type="text" onChange={(e) => ownerName = e.target.value}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">ID</label>
                <input type="text" onChange={(e) => id = e.target.value}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => email = e.target.value}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Password</label>
                <input type="password" onChange={(e) => password = e.target.value}/>
            </div>
            <Button type='submit' >Register</Button>
        </form>
    </div>
  )
}

export default AppartmentRegisteration