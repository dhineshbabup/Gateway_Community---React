import React from 'react'
import classes from "./SecurityForm.module.css"
import Button from '../UI/Button/Button'
const SecurityForm = () => {
  return (
    <div className={classes.security}>
      <form action="" className={`${classes.securityform}`}>
        <input type="text" placeholder='Name' />
        <input type="number" placeholder='Age'/>
        <input type="text" placeholder='Purpose'/>
        <input type="number" placeholder='Receiver Mobile Number'/>
        <input type="number" placeholder='Visitor Mobile Number'/>

        <input type="time" placeholder='IN-Time'/>
        <input type="time" placeholder='OUT-Time'/>
        <Button>Request</Button>

      </form>
    </div>
  )
}

export default SecurityForm
