document.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.getElementById("visitor-message");
    const lastVisit = localStorage.getItem("last-visit");
    const currentDate = Date.now();

    if (!lastVisit) {
        messageContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            messageContainer.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            messageContainer.textContent = "You last visited 1 day ago.";
        } else {
            messageContainer.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }
    localStorage.setItem("last-visit", currentDate);
});

