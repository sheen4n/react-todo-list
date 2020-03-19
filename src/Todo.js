import React, { useState } from 'react';
import './Todo.css';

const Todo = ({
  task,
  removeTodo,
  saveEdit,
  index,
  completed,
  toggleCompletion
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task);

  const toggleForm = () => setIsEditing(!isEditing);

  const onEditSubmit = e => {
    e.preventDefault();
    saveEdit(editValue, index);
    toggleForm();
  };

  if (isEditing) {
    return (
      <div className='Todo'>
        <form className='Todo-edit-form'>
          <input
            type='text'
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
          />
          <button onClick={onEditSubmit}>Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={completed ? 'Todo completed' : 'Todo'}>
        <li className='Todo-task' onClick={() => toggleCompletion()}>
          {task}
        </li>
        <div className='Todo-buttons'>
          <button onClick={toggleForm}>
            <i className='fas fa-pen' />
          </button>
          <button onClick={removeTodo}>
            <i className='fas fa-trash' />
          </button>
        </div>
      </div>
    );
  }
};

export default Todo;
