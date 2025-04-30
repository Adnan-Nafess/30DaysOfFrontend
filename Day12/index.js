// ✅ Correct Access After Initialization

let a = 5;
console.log(a); // ✅ 5

// Example 1: let in TDZ
{
  console.log(msg); // ❌ ReferenceError
  let msg = "Hello TDZ";
}

// Example 2: var is NOT in TDZ
{
  console.log(x); // ✅ undefined (not ReferenceError)
  var x = 10;
}

// Example 3: Function Scope and TDZ

function checkTDZ() {
  console.log(typeof value); // ❌ ReferenceError
  let value = 10;
}
checkTDZ();

// Example 4: const in TDZ

{
  console.log(counter); // ❌ ReferenceError
  const counter = 0;
}

// TDZ with if Block

if (true) {
  console.log(myVar); // ❌ ReferenceError
  let myVar = 42;
}
