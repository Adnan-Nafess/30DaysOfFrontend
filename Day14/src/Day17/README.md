# Day 23: `useEffect` Hook in React – Deep Dive 🔄

---

## 🔍 What is `useEffect`?

The `useEffect` hook lets you **perform side effects** in function components. Think of it as a combination of:

* `componentDidMount`
* `componentDidUpdate`
* `componentWillUnmount`

in class components.

```js
useEffect(() => {
  // side-effect code here
}, [dependencies]);
```

---

## 💡 Why use `useEffect`?

* To **fetch data** from APIs
* To **set up subscriptions or listeners**
* To **manipulate the DOM** directly (rarely)
* To handle **side effects** in React apps

---

## 🕐 When does `useEffect` run?

It depends on the **dependency array**:

| Dependency   | When it runs         |
| ------------ | -------------------- |
| `[]` (empty) | Only once (on mount) |
| `[value]`    | When `value` changes |
| *no array*   | On **every** render  |

---

## 🧠 Behind the Scenes

* React batches updates, and effects run **after paint**.
* `useEffect` is **asynchronous**, but the callback itself **cannot be async directly**.
* Cleanup functions are handled **before the effect is re-run or component unmounts**.

---

## 🛠️ Example 1: Run Once on Mount (like `componentDidMount`)

```js
useEffect(() => {
  console.log("Component mounted!");
}, []);
```

---

## 🛠️ Example 2: Run When a Variable Changes

```js
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count updated to: ${count}`);
}, [count]);
```

---

## 🛠️ Example 3: Fetch API Data

```js
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

---

## 🛠️ Example 4: Cleanup – SetInterval and Clear It

```js
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running every second");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup
    console.log("Interval cleared");
  };
}, []);
```

---

## ⚠️ Common Mistakes

* ❌ Using async directly in `useEffect`:

  ```js
  // Not allowed
  useEffect(async () => {
    const data = await fetch(...);
  }, []);
  ```

* ✅ Correct way:

  ```js
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(...);
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);
  ```

---

## 🧪 Debugging Tip

To avoid unnecessary API calls or bugs, **always specify dependencies correctly**.

---

## 📌 Summary

| Concept          | Explanation           |
| ---------------- | --------------------- |
| `useEffect`      | Handles side effects  |
| Empty array `[]` | Runs only once        |
| Dependency array | Controls when it runs |
| Cleanup function | Avoids memory leaks   |

---

