import React, { useEffect, useState } from 'react'
import ToDoFooter from './todoFooter'
import ToDoBody from './todoBody'
import ToDoHeader from './todoHeader'


const ToDoList = (props) => {

  const [listData, setList] = useState([])
  const fetchItems = () => {
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${props.name}`).then(async (res) => {
      const data = await res.json()
      setList(data);
    })
  }
  useEffect(async () => {
    fetchItems()
  }, [])

  const handleCallback = (filterItems) => {
    // Update the component's state
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${props.name}`, {
      method: 'PUT',
      body:
        JSON.stringify(filterItems)
      ,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.ok) {
        setList(filterItems)
      }
    })

  }

  const handleSetList = (newInput) => {
    fetch(`https://playground.4geeks.com/apis/fake/todos/user/${props.name}`, {
      method: 'PUT',
      body:
        JSON.stringify([...listData, { id: listData.length + 1, label: newInput, done: false }])
      ,
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.ok) {
        setList((old) => {
          return [...old, { id: listData.length + 1, label: newInput, done: false }]
        })
      }
    })
  }
  return (
    <>
      <div className="card m-auto rounded-0">
        <div className="card-body fs-4 p-0">
          <ToDoHeader parentCallback={handleSetList} />
          <ToDoBody lists={listData} parentCallback={handleCallback} />
        </div>
        <div className="card-footer text-muted text-start fw-light bg-white">
          <ToDoFooter lists={listData} />
        </div>
      </div>
      <div className='card rounded-0 m-auto cards'></div>
      <div className='card rounded-0 m-auto cards-bottom'></div>
    </>
  )
}

export default ToDoList