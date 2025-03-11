

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
        modal: "modal1",
    },
    {
        name: "Whiskers",
        breed: "Siamese Cat",
        age: 1,
        size: "Small",
        temperament: "Curious, affectionate, and loves to cuddle.",
        image: "images/cat1.jpg",
        modal: "modal2",
    },
    {
        name: "Max",
        breed: "German Shepherd",
        age: 3,
        size: "Large",
        temperament: "Loyal, protective, and highly trainable.",
        image: "images/dog2.jpg",
        modal: "modal3",
    },
    {
        name: "Luna",
        breed: "Maine Coon",
        age: 2,
        size: "Large",
        temperament: "Friendly, playful, and great with kids.",
        image: "images/cat2.jpg",
        modal: "modal4",
    },
    {
        name: "Rocky",
        breed: "Bulldog",
        age: 4,
        size: "medium",
        temperament: "Curious, affectionate, and loves to cuddle.",
        image: "images/dog3.jpg",
        modal: "modal5",
    },
    {
        name: "Milo",
        breed: "Bengal Cat",
        age: 2,
        size: "medium",
        temperament: "Curious, affectionate, and loves to cuddle.",
        image: "images/cat3.jpg",
        modal: "modal6",
    },
    {
        name: "Buddy",
        breed: "Golden Retriever",
        age: 2,
        size: "Large",
        temperament: "Friendly, playful, and great with kids.",
        image: "images/dog1.jpg",
        modal: "modal1",
    },
    {
        name: "Whiskers",
        breed: "Siamese Cat",
        age: 1,
        size: "Small",
        temperament: "Curious, affectionate, and loves to cuddle.",
        image: "images/cat1.jpg",
        modal: "modal2",
    },
    {
        name: "Max",
        breed: "German Shepherd",
        age: 3,
        size: "Large",
        temperament: "Loyal, protective, and highly trainable.",
        image: "images/dog2.jpg",
        modal: "modal3",
    },
    {
        name: "Luna",
        breed: "Maine Coon",
        age: 2,
        size: "Large",
        temperament: "Friendly, playful, and great with kids.",
        image: "images/cat2.jpg",
        modal: "modal4",
    },
    {
        name: "Rocky",
        breed: "Bulldog",
        age: 4,
        size: "medium",
        temperament: "Curious, affectionate, and loves to cuddle.",
        image: "images/dog3.jpg",
        modal: "modal5",
    },
    {
        name: "Milo",
        breed: "Bengal Cat",
        age: 2,
        size: "medium",
        temperament: "Curious, affectionate, and loves to cuddle.",
        image: "images/cat3.jpg",
        modal: "modal6",
    },
    
    // Add data for the remaining 9 pets
];

// Function to render pet cards
function renderPets(filteredPets) {
    const petGrid = document.querySelector('.pet-layer');
    petGrid.innerHTML = ""; // Clear existing cards

    // Group pets into layers of 3
    for (let i = 0; i < filteredPets.length; i += 3) {
        const petLayer = document.createElement('div');
        petLayer.className = 'pet-layer'; // Create a new layer

        // Create pet cards for each pet in the current layer
        for (let j = i; j < i + 3 && j < filteredPets.length; j++) {
            const pet = filteredPets[j];
            const petCard = document.createElement('div');
            petCard.className = "pet-card";
            petCard.setAttribute('onclick', `openModal('${pet.modal}')`);
            petCard.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>${pet.breed} | ${pet.age} years</p>
                <span class="status available">Available</span>
            `;
            petLayer.appendChild(petCard); // Add the pet card to the layer
        }

        petGrid.appendChild(petLayer); // Add the layer to the grid
    }
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
