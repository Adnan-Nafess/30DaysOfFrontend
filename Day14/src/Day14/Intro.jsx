// const element = <h1>Hello, world!</h1>;

// const element = React.createElement('h1', null, 'Hello, world!');

// ### 🔹 Example 1: Basic Component


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

export default Counter;





