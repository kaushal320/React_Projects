import React, { useState } from "react";
import "../style.css";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handlesubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.random(),
      });
    });
  };
  const removetodos = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className="container">
      <input
        value={input}
        type="text"
        placeholder="Enter your todos"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handlesubmit}>submit</button>
      <ul className="todos-list">
        {todos.map(({ id, text }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button
              onClick={() => {
                removetodos(id);
              }}
              className="close"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
