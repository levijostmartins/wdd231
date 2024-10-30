// Get modal elements
const modal = document.getElementById("calendarModal");
const openModalBtn = document.getElementById("openModal");

// Open the modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
