import React from 'react'
import { MdClose } from 'react-icons/md'
import classes from "./FormTable.module.css"
import Button from "../UI/Button/Button"
const FormTable = ({handleChange,handleSubmit,handleClose,rest}) => {
  return (
    <div className={classes['add-container']}>
    <form action="" onSubmit={handleSubmit}>
      <div className={classes['close-btn']} onClick={handleClose}>
        {<MdClose />}
      </div>
      <input
        type="text"
        name="name"
        placeholder="name"
        id=""
        value={rest.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={rest.email}
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={rest.age}
        onChange={handleChange}
      />
      <input
        type="number"
        name="flatno"
        placeholder="Flat Number"
        value={rest.flatno}
        onChange={handleChange}
      />
      <input
        type="number"
        name="mobilenumber"
        placeholder="Mobile Number"
        value={rest.mobilenumber}
        onChange={handleChange}
      />
      
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={rest.gender}
        onChange={handleChange}
      />
      <Button type={'submit'} className={classes.btn}>Submit</Button>
    </form>
  </div>
  )
}

export default FormTable
