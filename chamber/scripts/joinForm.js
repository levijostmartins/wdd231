document.addEventListener('DOMContentLoaded', () => {
    // Set the current timestamp when the form loads
    const timestampInput = document.getElementById('timestamp');
    const now = new Date();
    timestampInput.value = now.toISOString();

    // Function to show the membership modal
    window.showModal = function (modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';  
    }

    // Function to close the membership modal
    window.closeModal = function (modalId) {
        const modal = document.getElementById(modalId); 
        modal.style.display = 'none'; 
    }
    
    // Optional: Close the modal when clicking outside of the modal content
    window.onclick = function (event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
