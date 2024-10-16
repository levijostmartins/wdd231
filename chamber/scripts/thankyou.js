document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    // Display the form data
    document.getElementById('firstName').textContent = urlParams.get('firstName') || "N/A";
    document.getElementById('lastName').textContent = urlParams.get('lastName') || "N/A";
    document.getElementById('email').textContent = urlParams.get('email') || "N/A";
    document.getElementById('phone').textContent = urlParams.get('phone') || "N/A";
    document.getElementById('organization').textContent = urlParams.get('organization') || "N/A";
    document.getElementById('membership').textContent = urlParams.get('membership') || "N/A";

    const timestamp = urlParams.get('timestamp');
    if (timestamp) {
        const dateObj = new Date(timestamp);
        const formattedDate = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`;
        document.getElementById('timestamp').textContent = formattedDate;
    } else {
        document.getElementById('timestamp').textContent = "N/A";
    }
});
