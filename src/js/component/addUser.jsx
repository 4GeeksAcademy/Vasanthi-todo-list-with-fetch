import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ToDoList from "./todoList";
import UserList from "./userList";

//create your first component
const AddUser = (props) => {
  const [input, setInput] = useState('')
  const [showAlert, setAlert] = useState(false)
  const [msg, setMsg] = useState('')
  const AddUserCall = () => {
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${input}`, {
      method: 'POST',
      body: JSON.stringify([]),
      headers: { 'Content-Type': 'application/json' }
    }).then(async (res) => {
      if (res.ok) {
        const data = await res.json()
        setMsg(data.msg)
        setAlert(true)
        props.parentAddUser()
        setTimeout(() => {
          setAlert(false)
        }, 2000)
      }
    })
  }
  return (
    <>
      {showAlert && <div className="alert alert-success" role="alert">
        {msg}
      </div>}
      <div className="text-center todo-wrapper">
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} className="me-2" />
        <button className="btn btn-secondary" onClick={AddUserCall}>Add User</button>
      </div>
    </>
  );
};

export default AddUser;
