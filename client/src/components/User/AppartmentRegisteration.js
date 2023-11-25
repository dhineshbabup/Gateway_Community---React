import React, { useState } from 'react'
import classes from "./AppartmentRegisteration.module.css"
import Button from '../UI/Button/Button'
import Axios from "axios"
const AppartmentRegisteration = () => {
    const [formData, setFormData] = useState({
        appartmentName : "",
        address: "",
        ownerName: "",
        mobileNumber: "",
        aadhar: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const {value, name} = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name] : value,
            }
        })
    }
    console.log(formData)
    const submitHandler = (e) => {
        e.preventDefault();
        const data = Axios.post("http://localhost:8000/createAppartment", formData)
        console.log(data);
    }
    
  return (
    <div className={classes.appartment}>
        <form className={classes.form} onSubmit={submitHandler}>
            <h1 className={classes.heading}><span>Appartment</span> Registeration</h1>
            <div className={classes.control}>
                <label htmlFor="">Appartment Name</label>
                <input type="text" name='appartmentName' onChange={handleChange}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Address</label>
                <input type="text" name='address' onChange={ handleChange}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Mobile Number</label>
                <input type="number" name='mobileNumber' onChange={handleChange}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Owner Name</label>
                <input type="text" name='ownerName' onChange={handleChange}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">ID</label>
                <input type="text" name='aadhar' onChange={handleChange}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Email</label>
                <input type="email" name='email' onChange={handleChange}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">Password</label>
                <input type="password" name='password' onChange={handleChange}/>
            </div>
            <Button type='submit' >Register</Button>
        </form>
    </div>
  )
}

export default AppartmentRegisteration