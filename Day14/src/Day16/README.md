# 🧠 `useState` Hook in React – What, Why, When, and How

---

## 🔍 What is `useState`?

`useState` is a **React Hook** that allows you to add **stateful behavior** to functional components.
It lets your component "remember" values between renders and re-render when those values change.

```js
const [state, setState] = useState(initialValue);
```

---

## ❓ Why use `useState`?

* React’s **functional components** are stateless by default.
* `useState` gives them the ability to:

  * Store user input
  * Track UI visibility
  * Handle counters, form data, toggles, etc.
* It enables **reactive rendering** — your UI updates when the state changes.

✅ **In short**: It's how you make your app interactive.

---

## ⏰ When to use `useState`?

Use `useState` when:

* You need to **track and update a value** inside a component (e.g., counter, toggle, input).
* The logic is **local** to that component.
* You’re building **simple, component-level interactivity**.

📌 For complex state transitions or global state, consider `useReducer` or state management libraries like Redux/Zustand.

---

## ⚙️ How does `useState` work (Behind the Scenes)?

* React uses an internal **fiber architecture** and **hooks queue** to track state.
* When you call `setState`, React:

  1. Stores the new value in its hook queue.
  2. Marks the component as needing a re-render.
  3. On the next render, `useState()` retrieves the **updated value**.

🔁 State updates are **asynchronous** and **batched** for performance.

---

## 📦 Syntax

```js
const [count, setCount] = useState(0);
```

* `count`: Current state value.
* `setCount`: Function to update the state.
* `0`: Initial value.

---

## 🛠️ Examples

### ✅ 1. Basic Counter

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

---

### ✅ 2. Toggle Component

```jsx
function Toggle() {
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
```

---

### ✅ 3. Input Field (Controlled Component)

```jsx
function NameInput() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

---

### ✅ 4. State as an Array

```jsx
function TodoList() {
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
```

---

## ⚠️ Key Rules & Best Practices

1. **Never mutate state directly:**
   ❌ `state.push(...)`
   ✅ `setState([...state, ...])`

2. **State updates are asynchronous:**

   ```js
   setCount(prev => prev + 1);
   ```

3. **Hooks must be called at the top level** of the component.

---

## 🧠 useState vs useReducer

| Criteria    | `useState`      | `useReducer`            |
| ----------- | --------------- | ----------------------- |
| Simplicity  | ✅ Simple logic  | ❌ Complex setup         |
| When to Use | Small UI states | Multiple related states |
| Debugging   | Easy            | More verbose            |

---


