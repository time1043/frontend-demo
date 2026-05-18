// Get element
const inputEl = document.querySelector(".vanilla-input");
const pEl = document.querySelector(".vanilla-p");

// Add event listener
inputEl.addEventListener("input", (e) => {
  pEl.textContent = e.target.value;
});
