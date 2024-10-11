const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Fetching prophet data
async function getProphetData() {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error("Error fetching the prophets data:", error);
        displayErrorMessage();
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Card elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');

        // Card's data
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Image element
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append elements
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthdate);
        card.appendChild(birthplace);

        // Card's div
        cards.appendChild(card);
    });
};

// Function to display the error message
const displayErrorMessage = () => {
    let errorMessage = document.createElement('p');
    errorMessage.textContent = "Sorry, we are unable to load the data at this time. Please try again later.";
    errorMessage.style.color = 'red';
    errorMessage.style.textAlign = 'center';
    cards.appendChild(errorMessage);
};

getProphetData();
