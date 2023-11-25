import React, { useState, useContext } from "react";
import { useEffect } from "react";
import classes from "./User.module.css";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import FormTable from "./FormTable";
import axios from "axios";
import Popup from "../Popup/Popup";

const User = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [editSection, setEditSection] = useState(false);
  const [addSection, setAddSection] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    mobilenumber: "",
    flatno: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    mobilenumber: "",
    flatno: "",
    _id: "",
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
    console.log(1);
    const data = await axios.post("http://localhost:8000/create", formData);
    console.log(data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        name: "",
        flatno: "",
        email: "",
        mobile: "",
        gender: "",
        mobilenumber: "",
      });
    }
  };

  const handleClose = () => {
    setAddSection(false);
    setEditSection(false);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("http://localhost:8000/update", formDataEdit);

    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };
  const handleEditOnChange = async (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const getFetchData = async () => {
    const data = await axios.get("http://localhost:8000/getUsers");
    if (data.data.success) {
      setUserList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);
  const user = localStorage.getItem("user");
  const admin1 = localStorage.getItem("admin");

  const handleDelete = async (id) => {
    const data = await axios.delete("http://localhost:8000/delete/" + id);
    console.log(data);
    if (data.data.success) {
      getFetchData();
    }
  };
  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };
  const email = [
    {
      name: "dhinesh",
      email: "dhineshbabup23@gmail.com",
    },
    {
      name: "dhineshu",
      email: "dhineshdp982@gmail.com",
    },
  ];
  const isEmailValid = (item) => {
    return item.endsWith("@gmail.com");
  };
  const filterArray = userList.filter((obj) => isEmailValid(obj.email));
  const security = localStorage.getItem("security");
  const emailSubmitHandler = async (e) => {
    e.preventDefault();
    const emails = [];
    for (let i = 0; i < filterArray.length; i++) {
      emails.push(filterArray[i].email);
    }
    console.log(emails);
    const data = await axios.post("http://localhost:8000/email", {
      email: emails,
      message: message,
    });
    console.log(data);
    if (data.data.status) {
      setShowPopup(true);
      setMessage("");
    }
    // }
  };
  const [showPopup, setShowPopup] = useState(false)
  return (
    <section className={classes.user}>
      {admin1 === "admin" ? (
        <Button
          className={classes["add-btn"]}
          onClick={() => setAddSection(!addSection)}
        >
          Add
        </Button>
      ) : (
        "n"
      )}{" "}
      <br />
      {admin1 === "admin" ? (
        <div className={classes['email-sender']}>
          <input
            type="text"
            name=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="send message to All"
            id=""
          />
          <br />
          <Button type="submit" className={classes.sendbtn} onClick={emailSubmitHandler}>
            Send
          </Button>
        </div>
      ) : null}
      {addSection && (
        <FormTable
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          rest={formData}
        />
      )}
      {editSection && (
        <FormTable
          handleChange={handleEditOnChange}
          handleSubmit={handleUpdate}
          handleClose={handleClose}
          rest={formDataEdit}
        />
      )}
      <Popup trigger={showPopup} setTrigger={setShowPopup}>
        <h2>Email Sent</h2> <hr /> <br />
        <p>Your email has sent all the members</p>
      </Popup>
      {user ? (
        <table className={classes["styled-table"]}>
          <thead>
            <tr>
              <th>S.No</th>

              {admin1 === "admin" || security === "security" ? (
                <td>Flat No</td>
              ) : (
                ""
              )}
              <th>Name</th>
              <th>Email</th>
              {admin1 === "admin" ? <td>Mobile</td> : ""}
              <th>Age</th>
              <th>Gender</th>
              {admin1 === "admin" || security === "security" ? <th></th> : ""}
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => (
              <tr key={item._id}>
                <td>{item._id.substring(0, 5)}</td>
                {admin1 === "admin" || security === "security" ? (
                  <td>{item.flatno}</td>
                ) : (
                  ""
                )}
                <td>{item.name}</td>
                <td>{item.email}</td>
                {admin1 === "admin" ? <td>{item.mobilenumber}</td> : ""}
                <td>{item.age}</td>
                <td>{item.gender}</td>
                {security === "security" ? (
                  <td>
                    <Button
                      className={classes.btn}
                      onClick={() => navigate("/request")}
                    >
                      Request
                    </Button>
                  </td>
                ) : (
                  ""
                )}
                {admin1 === "admin" ? (
                  <>
                    <td className={classes["edit-btn"]}>
                      <Button
                        className={classes.btn}
                        onClick={() => handleEdit(item)}
                      >
                        Update
                      </Button>
                      <Button
                        className={classes.btn}
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                      {/* </td>
                    <td> */}
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
