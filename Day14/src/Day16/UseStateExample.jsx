// const [state, setState] = useState(initialValue);

// 1. Basic Counter

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}


// ✅ 2. Toggle Component

export const Toggle = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>Hello</p>}
    </div>
  );
}


// 3. Input Field (Controlled Component)

export const NameInput = () => {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}


// 4. State as an Array

export const TodoList = () => {
  const [todos, setTodos] = useState(["Learn React"]);

  const addTodo = () => {
    setTodos(prev => [...prev, `Task ${prev.length + 1}`]);
  };

  return (
    <div>
      <ul>{todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
      <button onClick={addTodo}>Add</button>
    </div>
  );
}