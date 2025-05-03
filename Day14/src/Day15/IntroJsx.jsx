// Example 1: Basic JSX Usage

// const element = React.createElement('h1', null, 'Hello, world!');

export const IntroJsx = () => {
  const name = "Adnan";
  return <h2>Welcome, {name}!</h2>;
};

// Example 2: JSX with JavaScript Expressions

export const Time = () => {
  const now = new Date().toLocaleTimeString();
  return <p>The current time is: {now}</p>;
};

// Example 3: JSX with if-else using Ternary Operator

export const Greet = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
};
