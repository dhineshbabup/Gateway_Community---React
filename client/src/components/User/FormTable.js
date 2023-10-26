import React from 'react'
import { MdClose } from 'react-icons/md'
import classes from "./FormTable.module.css"
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
        value={rest.mobile}
        onChange={handleChange}
      />

      <button className={classes.btn}>submit</button>
    </form>
  </div>
  )
}

export default FormTable
