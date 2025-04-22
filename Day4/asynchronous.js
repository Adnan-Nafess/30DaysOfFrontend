// what is callback

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Output: Data fetched!
});

//  what wrong with callback hell

//Callback hell
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

//Error hanlding
function fetchData(callback) {
  setTimeout(() => callback("Error", null), 1000);
}

fetchData((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

// Promise

fetchData()
  .then((data) => process(data))
  .then((processed) => save(processed))
  .catch((error) => handleError(error));

// Async / Await

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

getData();

// How Async function work

async function demo() {
  console.log("Before await");
  await Promise.resolve(); // A resolved Promise
  console.log("After await");
}

console.log("Start");
demo();
console.log("End");

//output
//   Start
//   Before await
//   End
//   After await

// callback hell

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

function performStep(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        console.log(`Step ${step} complete`);
        resolve();
      } else {
        reject(`Step ${step} failed`);
      }
    }, 1000);
  });
}

performStep(1)
  .then(() => performStep(2))
  .then(() => performStep(3))
  .catch((error) => console.error("Error:", error));

// Async Await

function performStep(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        console.log(`Step ${step} complete`);
        resolve();
      } else {
        reject(`Step ${step} failed`);
      }
    }, 1000);
  });
}

async function executeSteps() {
  try {
    await performStep(1);
    await performStep(2);
    await performStep(3);
  } catch (error) {
    console.error("Error:", error);
  }
}

executeSteps();
