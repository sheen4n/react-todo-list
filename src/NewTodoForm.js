import React, { useState } from 'react';
import './NewTodoForm.css';

const NewToDoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={onSubmit} className='NewTodoForm'>
      <label htmlFor='task'>New Todo</label>
      <input
        type='text'
        placeholder='New todo'
        id='task'
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewToDoForm;
