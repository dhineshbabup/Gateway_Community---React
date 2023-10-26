import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./User.module.css";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import FormTable from "./FormTable";
import axios from "axios";
const User = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [editSection, setEditSection] = useState(false)
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    age: "",
    _id : ""
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:8000/create", formData);
    console.log(data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData()
      setFormData({
        name:"",
        email: "",
        mobile: ""
      })
    }
  };
  const handleClose = () => {
    setAddSection(false)
  }
  const handleUpdate = async(e) =>{
    e.preventDefault();
    const data = await axios.put("http://localhost:8000/update",formDataEdit);
    
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false)
    }

  }
  const handleEditOnChange = async(e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  // Axios.get("http://localhost:8000/getUsers")
  //   .then(async (user) => {
  //     setUsers(user.data);
  //   })
  //   .catch((err) => console.log(err));

  const getFetchData = async () => {
    const data = await axios.get("http://localhost:8000/getUsers");
    if (data.data.success) {
      setUserList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);
  // console.log(users[14].isAdmin && 'hi') 
  const user = localStorage.getItem("user");
  const admin1 = localStorage.getItem("admin");
  const [admin, setAdmin] = useState(false);

  if(admin1===true) {
    setAdmin(true)
  }
  console.log(admin1)
  const handleDelete = async (id) => {
    const data = await axios.delete("http://localhost:8000/delete/" + id);
    console.log(data)
    if (data.data.success) {
      getFetchData();
      alert(data.data.success);
    }
  };
  const handleEdit = (el) => {
    setFormDataEdit(el)
    setEditSection(true)
  }
  return (
    <section className={classes.user}>
     {admin===true ? <Button onClick={() => setAddSection(!addSection)}>Add</Button> : ''} 
      {addSection && (
         <FormTable handleChange={handleChange} handleSubmit={handleSubmit} handleClose={handleClose} rest={formData}/>
        )}
        {editSection && (
         <FormTable handleChange={handleEditOnChange} handleSubmit={handleUpdate} handleClose={handleClose} rest={formDataEdit}/>
        )}
      {user ? (
        <table className={classes["styled-table"]}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              {admin===true ? <th></th> : ""}
              {admin===true ? <th></th> : ""}
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => (
              <tr key={item._id}>
                <td>{item._id.substring(0,5)}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                {/* {console.log(item._id)} */}
                {admin===true ? (
                  <>
                    <td>
                      <Button onClick={() => handleDelete(item._id)}>
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button onClick={()=>handleEdit(item)}>Update</Button>
                    </td>
                  </>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={classes.center}>
          <h3> There is No data Available</h3>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </div>
      )}
    </section>
  );
};

export default User;
