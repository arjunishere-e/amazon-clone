// script.js
document.querySelector('.search-icon').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Implement actual search functionality here if needed
    } else {
        alert('Please enter a search term.');
    }
});



document.querySelector('.nav-address').addEventListener('click', () => {
    const location = prompt('Enter your delivery location:');
    if (location) {
        document.querySelector('.add-second').textContent = location;
    }
});



// JavaScript
// Add this to script.js
document.querySelector('.nav-signin').addEventListener('mouseover', () => {
    document.querySelector('.dropdown-menu').style.display = 'block';
});
document.querySelector('.nav-signin').addEventListener('mouseout', () => {
    document.querySelector('.dropdown-menu').style.display = 'none';
});


document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// JavaScript for clickable boxes
document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', () => {
        alert(`Navigating to ${box.querySelector('h2').textContent}`);
        
    });
});


// Search Functionality
document.querySelector('.search-icon').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value;
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a search term.');
    }
});

// Address Selector
document.querySelector('.nav-address').addEventListener('click', () => {
    const location = prompt('Enter your delivery location:');
    if (location) {
        document.querySelector('.add-second').textContent = location;
    }
});

// Account & Lists Dropdown
document.querySelector('.nav-signin').addEventListener('mouseover', () => {
    document.querySelector('.dropdown-menu').style.display = 'block';
});
document.querySelector('.nav-signin').addEventListener('mouseout', () => {
    document.querySelector('.dropdown-menu').style.display = 'none';
});

// Cart Update
let cartCount = 0;
document.querySelector('.nav-cart').addEventListener('click', () => {
    cartCount++;
    document.querySelector('.nav-cart').innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
});

// Scroll to Top
document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Interactive Panels
document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', () => {
        alert(`Navigating to ${box.querySelector('h2').textContent}`);
    });
});
