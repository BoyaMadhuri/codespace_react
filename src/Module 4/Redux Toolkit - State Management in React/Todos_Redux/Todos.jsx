import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todosSlice';

const Todos = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        placeholder="Enter new todo" 
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch(toggleTodo(todo.id))} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
