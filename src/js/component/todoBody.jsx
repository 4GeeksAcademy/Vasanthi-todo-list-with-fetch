import React, { useState } from 'react'
const ToDoBody = (props) => {

  function deleteButton(item) {
    const updateList = props.lists.filter((e) => e.id != item.id)
    props.parentCallback(updateList)
  }


  const mapItems = props.lists.length > 0 && props.lists.map((item) => {
    return (
      <div className='' key={Math.random().toString()}>
        <li className="list-group-item d-flex p-3 fw-light" key={item.id}>
          <p className='item-name w-100 text-start mb-0'>{item.label}</p>
          <p className='delete-icon mb-0' key={item.name} onClick={() => deleteButton(item)}
          >x</p>
        </li>
      </div>
    )
  })
  return (
    <>
      <div>
        <ul className='list-group list-group-flush'>
          {mapItems}
        </ul>
      </div>
    </>
  )
}

export default ToDoBody