import React, { useEffect, useState } from 'react';
import AddUser from './addUser';
import ToDoModal from './todoModal';

const UserList = () => {
  const [userList, setUserList] = useState([])
  const [selectUser, setSelectedUser] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setAlert] = useState(false)
  const [msg, setMsg] = useState('')
  function fetchUsers() {
    fetch('https://playground.4geeks.com/apis/fake/todos/user').then(async (res) => {
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setUserList(data)
      }
    }).catch((e) => console.log(e))
  }
  useEffect(async () => {
    fetchUsers()
  }, [])

  const addTasks = (name) => {
    setSelectedUser(name)
    setShowModal(true)
  }

  const deleteUser = (name) => {
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(async (res) => {
      if (res.ok) {
        fetchUsers()
        const data = await res.json()
        setMsg(data.msg)
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 2000)
      }
    })
  }
  function parentCallBack() {
    fetchUsers()
  }

  const userTableList = userList.length > 0 && userList.map((item, index) => {
    return (
      <tr key={item} tabIndex={index + 1}>
        <th scope="row">{index}</th>
        <td>{item}</td>
        <td ><span className='cursor' onClick={() => addTasks(item)}>+task</span> <span className='cursor' onClick={() => deleteUser(item)}>delete</span></td>
      </tr>
    )
  })
  return (
    <>
      {showAlert && <div className="alert alert-success" role="alert">
        {msg}
      </div>}
      <AddUser parentAddUser={parentCallBack} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userTableList}
        </tbody>
      </table>
      {showModal && <ToDoModal showModal={showModal} name={selectUser} parentCallback={() => setShowModal(false)} />}
    </>
  )
}

export default UserList