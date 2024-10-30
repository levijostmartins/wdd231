document.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.getElementById("visitor-message");
    const lastVisit = localStorage.getItem("last-visit");
    const currentDate = Date.now();

    if (!lastVisit) {
        messageContainer.textContent = "Welcome! Feel free to book your session.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            messageContainer.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            messageContainer.textContent = "We missed you, when can we book a session?";
        } else {
            messageContainer.textContent = `You last visited ${daysSinceLastVisit} days ago. We're happy to see you back!`;
        }
    }

    // Show the message and then hide it after a delay
    messageContainer.classList.add("show");
    setTimeout(() => {
        messageContainer.classList.remove("show");
        messageContainer.classList.add("hide");
    }, 3000); // Display for 3 seconds

    localStorage.setItem("last-visit", currentDate);
});
