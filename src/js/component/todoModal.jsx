import React from "react";

import ToDoList from "./todoList";

//create your first component
const ToDoModal = (props) => {
  console.log(props)
  function closeModal() {
    props.parentCallback()
  }
  return (
    <>
      {props.showModal ?
        (<div className="modal" tabIndex={'-1'} style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{props.name} todos</h5>
                <button onClick={closeModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ToDoList name={props.name} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>) : null}
    </>
  );
};

export default ToDoModal;
