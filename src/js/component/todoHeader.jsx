import React, { useState } from 'react'
import ToDoBody from './todoBody'

const ToDoHeader = (props) => {

  function handleInputValue(event) {
    if (event.code.toLowerCase() == 'enter') { // Event
      props.parentCallback(event.target.value)
    }
  }

  return (
    <>
      <input
        type="text"
        className='form-control rounded-0 p-3 fw-light fs-4'
        onKeyDown={handleInputValue}
        placeholder="What needs to be done?"
      />
    </>
  )
}

export default ToDoHeader