// What is Throttling? 

function throttle(func, interval) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= interval) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }
  
  const handleScroll = throttle(() => {
    console.log("Scrolled!");
  }, 1000);
  
  window.addEventListener("scroll", handleScroll);
  