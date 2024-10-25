// Show popup notification based on visit history
function showPopupMessage(message) {
    const popup = document.getElementById('popupMessage');
    popup.textContent = message; 
    popup.style.opacity = '1'; 
    setTimeout(() => {
        popup.style.opacity = '0';
    }, 3000); 
}

document.addEventListener("DOMContentLoaded", () => {
    const lastVisit = localStorage.getItem("last-visit");
    const currentDate = Date.now();

    if (!lastVisit) {
        // First visit
        showPopupMessage("Welcome! Let us know if you have any questions.");
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastVisit < 1) {
            // Return within the same day
            showPopupMessage("Back so soon! Awesome!");
        } else if (daysSinceLastVisit === 1) {
            // Return after 1 day
            showPopupMessage("You last visited 1 day ago.");
        } else {
            // Return after more than 1 day
            showPopupMessage(`You last visited ${daysSinceLastVisit} days ago.`);
        }
    }

    // Update the last visit to current time
    localStorage.setItem("last-visit", currentDate);
});
