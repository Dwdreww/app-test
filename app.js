document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    // Simulate login validation
    if (username === "user" && password === "password") {
        message.textContent = "Login successful! Redirecting...";
        message.style.color = "#38bdf8";

        // Add a loading spinner or animation
        const button = document.querySelector('#login-form button');
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        button.disabled = true;

        // Redirect to dashboard.html after 2 seconds
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);
    } else {
        message.textContent = "Invalid username or password. Please try again.";
        message.style.color = "#fbbf24";
    }
});

// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modal if user clicks outside the modal content
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Add adoption functionality for all "Adopt Me!" buttons
document.addEventListener('DOMContentLoaded', function () {
    const adoptButtons = document.querySelectorAll('.modal-content button');
    adoptButtons.forEach(button => {
        button.addEventListener('click', function () {
            const petName = this.closest('.modal-content').querySelector('h2').textContent;
            alert(`Adoption request sent for ${petName}!`);
            closeModal(this.closest('.modal').id); // Close the modal after adoption
        });
    });
});


// Sample pet data
const pets = [
    {
        name: "Buddy",
        breed: "Golden Retriever",
        age: 2,
        size: "Large",
        temperament: "Friendly, playful, and great with kids.",
        image: "images/dog1.jpg",
    },
    {
        name: "Whiskers",
        breed: "Siamese Cat",
        age: 1,
        size: "Small",
        temperament: "Curious, affectionate, and loves to cuddle.",
        image: "images/cat1.jpg",
    },
    {
        name: "Max",
        breed: "German Shepherd",
        age: 3,
        size: "Large",
        temperament: "Loyal, protective, and highly trainable.",
        image: "images/dog2.jpg",
    },
    // Add data for the remaining 9 pets
];

// Function to render pet cards
function renderPets(filteredPets) {
    const petGrid = document.querySelector('.pet-grid');
    petGrid.innerHTML = ""; // Clear existing cards

    filteredPets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = "pet-card";
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>${pet.breed} | ${pet.age} years</p>
            <span class="status available">Available</span>
        `;
        petGrid.appendChild(petCard);
    });
}

// Function to filter pets
function filterPets() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const breedFilter = document.getElementById('breed-filter').value;
    const ageFilter = document.getElementById('age-filter').value;
    const sizeFilter = document.getElementById('size-filter').value;
    const temperamentFilter = document.getElementById('temperament-filter').value;

    const filteredPets = pets.filter(pet => {
        return (
            (pet.name.toLowerCase().includes(searchText) ||
             pet.breed.toLowerCase().includes(searchText) ||
             pet.temperament.toLowerCase().includes(searchText)) &&
            (breedFilter === "" || pet.breed === breedFilter) &&
            (ageFilter === "" || pet.age === parseInt(ageFilter)) &&
            (sizeFilter === "" || pet.size === sizeFilter) &&
            (temperamentFilter === "" || pet.temperament.includes(temperamentFilter))
        );
    });

    renderPets(filteredPets);
}

// Add event listeners for search and filters
document.addEventListener('DOMContentLoaded', function () {
    renderPets(pets); // Render all pets initially

    document.getElementById('search-button').addEventListener('click', filterPets);
    document.getElementById('search-input').addEventListener('input', filterPets);
    document.getElementById('breed-filter').addEventListener('change', filterPets);
    document.getElementById('age-filter').addEventListener('change', filterPets);
    document.getElementById('size-filter').addEventListener('change', filterPets);
    document.getElementById('temperament-filter').addEventListener('change', filterPets);
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

$(document).ready(function(){
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});
