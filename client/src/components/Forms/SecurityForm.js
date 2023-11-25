import React, { useState, useContext } from 'react'
import classes from "./SecurityForm.module.css"
import Button from '../UI/Button/Button'
import axios from "axios"
import Popup from '../Popup/Popup'
const SecurityForm = () => {
  const [requestData, setRequestData] = useState({
    name: '',
    age: '',
    purpose: '',
    email: '',
    visitorMobile: '',
    inTime: '',
    outTime: '',
  })
  const changeHandler = (e) =>{
    const {name, value} = e.target
    setRequestData(prev => {
      return {
        ...prev,
        [name] : value
      }
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    const data = await axios.post("http://localhost:8000/securityEmail",requestData)
    console.log(data)
    if(data.data.status) {
      setShowPopup(true)
      setRequestData({
        name: '',
        age: '',
        purpose: '',
        email: '',
        visitorMobile: '',
        inTime: '',
        outTime: '',
      })
    }
  }
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div className={classes.security}>
      <form action="" className={`${classes.securityform}`} onSubmit={submitHandler}>
      <h1><span>Request</span> Form</h1>
      <hr />
        <input type="text" placeholder='Name' name='name' value={requestData.name} onChange={changeHandler}/>
        <input type="number" placeholder='Age' name='age' value={requestData.age} onChange={changeHandler}/>
        <input type="text" placeholder='Purpose' name='purpose' value={requestData.purpose} onChange={changeHandler}/>
        <input type="email" placeholder='Receiver email ' name='email' value={requestData.email} onChange={changeHandler}/>
        <input type="number" placeholder='Visitor Mobile Number' name='visitorMobile' value={requestData.visitorMobile} onChange={changeHandler}/>
        <input type="time" placeholder='IN-Time' name='inTime' value={requestData.inTime} onChange={changeHandler}/>
        <input type="time" placeholder='OUT-Time' name='outTime' value={requestData.outTime} onChange={changeHandler}/>
        <Button type='submit'>Request</Button>
        <Popup trigger={showPopup} setTrigger={setShowPopup}>
        <h2>Request Sent</h2> <hr /> <br />
        <p>Your request has sent.</p>
        </Popup>

      </form>
    </div>
  )
}

export default SecurityForm
