// <!-- ## 🧪 Example 1: Handling List Item Clicks -->
document.getElementById("fruits").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log(`You clicked on ${e.target.textContent}`);
    }
  });
  

//Example 2: Button Actions in a Card Component
document.getElementById("cards").addEventListener("click", (e) => {
    if (e.target.classList.contains("like")) {
      console.log("Liked the card!");
    } else if (e.target.classList.contains("delete")) {
      console.log("Deleted the card!");
    }
  });
  


  // Example 3: Dynamic Form Field Handling
  document.getElementById("profileForm").addEventListener("input", (e) => {
    console.log(`${e.target.name} changed to ${e.target.value}`);
  });
  

//  Pro Tip: Use e.target.closest() for Deep Matching 

if (e.target.closest(".delete")) {
    // will still work if clicked inside a nested span inside .delete
  }
   