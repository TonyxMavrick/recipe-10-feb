// Recipes Page JavaScript
let filteredRecipes = [...recipes];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        document.getElementById('categoryFilter').value = categoryParam;
    }
    
    renderRecipes();
    setupFilters();
});

function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const timeFilter = document.getElementById('timeFilter');
    
    searchInput.addEventListener('input', filterRecipes);
    categoryFilter.addEventListener('change', filterRecipes);
    difficultyFilter.addEventListener('change', filterRecipes);
    timeFilter.addEventListener('change', filterRecipes);
}

function filterRecipes() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const categoryValue = document.getElementById('categoryFilter').value;
    const difficultyValue = document.getElementById('difficultyFilter').value;
    const timeValue = document.getElementById('timeFilter').value;
    
    filteredRecipes = recipes.filter(recipe => {
        // Search filter
        const matchesSearch = 
            recipe.title.toLowerCase().includes(searchQuery) ||
            recipe.description.toLowerCase().includes(searchQuery) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery));
        
        // Category filter
        const matchesCategory = 
            categoryValue === 'All' || 
            recipe.category === categoryValue ||
            (categoryValue === 'Dinner' && recipe.category === 'Dinner');
        
        // Difficulty filter
        const matchesDifficulty = 
            difficultyValue === 'All' || 
            recipe.difficulty === difficultyValue;
        
        // Time filter
        let matchesTime = true;
        if (timeValue !== 'All') {
            const totalMinutes = parseInt(recipe.totalTime);
            if (timeValue === 'Under 30' && totalMinutes >= 30) matchesTime = false;
            if (timeValue === '30-60' && (totalMinutes < 30 || totalMinutes > 60)) matchesTime = false;
            if (timeValue === 'Over 60' && totalMinutes <= 60) matchesTime = false;
        }
        
        return matchesSearch && matchesCategory && matchesDifficulty && matchesTime;
    });
    
    renderRecipes();
}

function renderRecipes() {
    const container = document.getElementById('recipesGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');
    const resultPlural = document.getElementById('resultPlural');
    
    // Update count
    resultsCount.textContent = filteredRecipes.length;
    resultPlural.textContent = filteredRecipes.length !== 1 ? 's' : '';
    
    if (filteredRecipes.length === 0) {
        container.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        container.style.display = 'grid';
        noResults.style.display = 'none';
        
        container.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            container.innerHTML += createRecipeCard(recipe);
        });
    }
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

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = 'All';
    document.getElementById('difficultyFilter').value = 'All';
    document.getElementById('timeFilter').value = 'All';
    filterRecipes();
}
