# Day 14: Introduction to React – What, Why, and How 💡

## ⚛️ What is React?

React is a **JavaScript library for building user interfaces**, especially single-page applications (SPAs). It was developed by Facebook and is now open-sourced and maintained by a large community.

React focuses primarily on the **view layer** of an application — that means it helps you build the parts of your app that users interact with (UI).

---

## ❓ Why Use React?

* 🔄 **Reusable Components** – Write once, use anywhere. React encourages the use of modular components.
* ⚡ **Fast Rendering** – Uses the **Virtual DOM** to minimize costly DOM manipulations.
* 🧠 **Declarative Syntax** – You describe *what* you want, not *how* to do it.
* 🛠️ **Tooling & Ecosystem** – React has a rich ecosystem: React Router, Redux, Next.js, etc.
* 🌐 **Large Community Support** – Tons of tutorials, tools, and libraries.

---

## 🔧 How to Create a React App?

### ✅ Using Vite (Recommended for Speed)

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### ✅ Using Create React App (CRA)

```bash
npx create-react-app my-app
cd my-app
npm start
```

This sets up a development environment with a local server, hot-reloading, and JSX support.

---

## 🔍 Behind the Scenes: How React Works

### 1. **JSX to React.createElement()**

JSX is syntactic sugar that gets compiled to `React.createElement` calls.

```jsx
const element = <h1>Hello, world!</h1>;
// Compiles to:
const element = React.createElement('h1', null, 'Hello, world!');
```

### 2. **Virtual DOM**

React maintains a lightweight copy of the actual DOM — called the **Virtual DOM**.

* When state or props change, React compares the new Virtual DOM with the previous one using a process called **Reconciliation**.
* Then it calculates the minimum number of DOM operations and updates the real DOM efficiently.

### 3. **Re-rendering**

When the state changes:

* React triggers a re-render of that component.
* Only the parts of the DOM that actually changed are updated.

---

## 🧪 Examples

### 🔹 Example 1: Basic Component

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

### 🔹 Example 2: Component with State

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### 🔹 Example 3: Passing Props

```jsx
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

<Greeting name="Adnan" />
```

---

## 🧠 Summary

React is a powerful tool for building modern web UIs. It’s fast, efficient, component-based, and easy to scale. With concepts like the Virtual DOM and JSX, React simplifies UI development by making it declarative and modular.

---

## 🔗 Learn More

* [Official Docs](https://reactjs.org/)
* [React – GitHub](https://github.com/facebook/react)

