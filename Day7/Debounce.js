function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  function fetchSearchResults(query) {
    console.log("Searching for:", query);
    // Imagine: fetch(`https://api.com/search?q=${query}`)
  }
  
  const handleInput = debounce((e) => {
    fetchSearchResults(e.target.value);
  }, 400);
  
  document.getElementById("search-box").addEventListener("input", handleInput);
  