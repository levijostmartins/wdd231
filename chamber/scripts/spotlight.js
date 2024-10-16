document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('member-container');
    const toggleButton = document.getElementById('view-toggle');

    // Fetch data from JSON
    async function fetchMembers(viewType = 'grid') {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const members = await response.json();

            // Filter out Silver and Gold members
            const silverGoldMembers = members.filter(member => member.membership === 2 || member.membership === 3);

            // Randomly select 2 or 3 members to display
            const randomMembers = getRandomMembers(silverGoldMembers, 3);

            // Display these members
            displayMembers(randomMembers, viewType);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    }

    // Helper function to select 'n' random members
    function getRandomMembers(members, n) {
        const shuffled = [...members].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n); // Return only the first 'n' members from the shuffled array
    }

    // Display members either in grid or list view
    function displayMembers(members, viewType) {
        container.innerHTML = ''; // Clear previous content
        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card', viewType);

            // Populate member data
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${getMembershipLevel(member.membership)}</p>
            `;
            container.appendChild(card); // Add the card to the container
        });
    }

    // Helper function to display membership level
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    // Toggle between grid and list views
    toggleButton?.addEventListener('click', () => {
        const isListView = container.classList.toggle('list-view');
        const viewType = isListView ? 'list' : 'grid';
        fetchMembers(viewType);
        toggleButton.textContent = isListView ? 'Switch to Grid View' : 'Switch to List View';
    });

    // Initial fetch of members in grid view
    fetchMembers();
});
