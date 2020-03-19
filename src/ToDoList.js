import React, { useState } from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { task: 'Walk the Chicken', completed: false, id: uuidv4() },
    { task: 'Swim the Pig', completed: false, id: uuidv4() }
  ]);

  const handleAddTodo = task => {
    setTodos([...todos, { task, completed: false, id: uuidv4() }]);
  };

  const handleRemoveTodo = id => {
    setTodos([...todos].filter(td => td.id !== id));
  };

  const handleEditTodo = (editedTodo, i) => {
    let newTodos = [...todos];
    newTodos[i].task = editedTodo;
    setTodos(newTodos);
  };

  const handleToggleCompleteTodo = i => {
    let newTodos = [...todos];
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  };

  return (
    <div className='TodoList'>
      <h1>
        To do List! <span>A simple react todo list app</span>
      </h1>
      <ul>
        {todos.map(({ task, completed, id }, index) => (
          <Todo
            task={task}
            key={id}
            removeTodo={() => handleRemoveTodo(id)}
            saveEdit={handleEditTodo}
            index={index}
            completed={completed}
            toggleCompletion={() => handleToggleCompleteTodo(index)}
          />
        ))}
      </ul>
      <NewTodoForm addTodo={handleAddTodo} />
    </div>
  );
};

export default ToDoList;
