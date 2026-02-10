// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('show');
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show ' + type;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            showToast('Thanks for subscribing! Check your email for confirmation.', 'success');
            this.reset();
        }
    });
}

// Load Featured Recipes on Home Page
if (document.getElementById('featuredRecipes')) {
    loadFeaturedRecipes();
}

if (document.getElementById('popularRecipes')) {
    loadPopularRecipes();
}

function loadFeaturedRecipes() {
    const container = document.getElementById('featuredRecipes');
    const featuredRecipes = recipes.slice(0, 8);
    
    featuredRecipes.forEach(recipe => {
        container.innerHTML += createRecipeCard(recipe);
    });
}

function loadPopularRecipes() {
    const container = document.getElementById('popularRecipes');
    const popularRecipes = recipes.slice(8, 12);
    
    popularRecipes.forEach(recipe => {
        container.innerHTML += createRecipeCard(recipe);
    });
}

function createRecipeCard(recipe) {
    const difficultyClass = recipe.difficulty === 'Easy' ? 'difficulty-easy' : 
                           recipe.difficulty === 'Medium' ? 'difficulty-medium' : 
                           'difficulty-hard';
    
    return `
        <a href="recipe-detail.html?id=${recipe.id}" class="recipe-card">
            <div class="recipe-card-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe-card-content">
                <h3 class="recipe-card-title">${recipe.title}</h3>
                <p class="recipe-card-description">${recipe.description}</p>
                <div class="recipe-card-meta">
                    <div>
                        <i class="fas fa-clock"></i>
                        <span>${recipe.totalTime}</span>
                    </div>
                    <div>
                        <i class="fas fa-hat-chef"></i>
                        <span class="difficulty-badge ${difficultyClass}">${recipe.difficulty}</span>
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Set Active Nav Link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();
