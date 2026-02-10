// Recipe Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    if (!recipeId) {
        window.location.href = 'recipes.html';
        return;
    }
    
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        window.location.href = 'recipes.html';
        return;
    }
    
    // Update page title
    document.title = `${recipe.title} - FlavorLoop`;
    
    // Render recipe header
    renderRecipeHeader(recipe);
    
    // Render recipe content
    renderRecipeContent(recipe);
    
    // Render related recipes
    renderRelatedRecipes(recipe);
    
    // Setup action buttons
    setupActionButtons();
});

function renderRecipeHeader(recipe) {
    const container = document.getElementById('recipeHeader');
    
    container.innerHTML = `
        <div class="recipe-detail-image">
            <img src="${recipe.image}" alt="${recipe.title}">
        </div>
        <div>
            <span class="recipe-category-badge">${recipe.category}</span>
            <h1 class="recipe-detail-title">${recipe.title}</h1>
            <p class="recipe-detail-description">${recipe.description}</p>
            
            <div class="recipe-meta-grid">
                <div class="recipe-meta-item">
                    <div class="recipe-meta-icon"><i class="fas fa-clock"></i></div>
                    <span class="recipe-meta-label">Prep Time</span>
                    <div class="recipe-meta-value">${recipe.prepTime}</div>
                </div>
                <div class="recipe-meta-item">
                    <div class="recipe-meta-icon"><i class="fas fa-clock"></i></div>
                    <span class="recipe-meta-label">Cook Time</span>
                    <div class="recipe-meta-value">${recipe.cookTime}</div>
                </div>
                <div class="recipe-meta-item">
                    <div class="recipe-meta-icon"><i class="fas fa-users"></i></div>
                    <span class="recipe-meta-label">Servings</span>
                    <div class="recipe-meta-value">${recipe.servings}</div>
                </div>
                <div class="recipe-meta-item">
                    <div class="recipe-meta-icon"><i class="fas fa-hat-chef"></i></div>
                    <span class="recipe-meta-label">Difficulty</span>
                    <div class="recipe-meta-value">${recipe.difficulty}</div>
                </div>
            </div>
            
            <div class="recipe-actions">
                <button class="btn btn-primary" id="saveRecipeBtn">
                    <i class="fas fa-bookmark"></i>
                    <span>Save Recipe</span>
                </button>
                <button class="btn btn-secondary" id="shareRecipeBtn">
                    <i class="fas fa-share-nodes"></i>
                    <span>Share</span>
                </button>
            </div>
        </div>
    `;
}

function renderRecipeContent(recipe) {
    const container = document.getElementById('recipeContent');
    
    // Render ingredients
    let ingredientsHTML = '<div class="recipe-ingredients"><h2>Ingredients</h2><ul class="ingredients-list">';
    recipe.ingredients.forEach(ingredient => {
        ingredientsHTML += `
            <li>
                <i class="fas fa-circle-check"></i>
                <span>${ingredient}</span>
            </li>
        `;
    });
    ingredientsHTML += '</ul></div>';
    
    // Render instructions
    let instructionsHTML = '<div><div class="recipe-instructions"><h2>Instructions</h2><ol class="instructions-list">';
    recipe.instructions.forEach((instruction, index) => {
        instructionsHTML += `
            <li>
                <div class="instruction-number">${index + 1}</div>
                <p class="instruction-text">${instruction}</p>
            </li>
        `;
    });
    instructionsHTML += '</ol></div>';
    
    // Render tips if available
    if (recipe.tips && recipe.tips.length > 0) {
        instructionsHTML += '<div class="recipe-tips"><h3>Tips & Variations</h3><ul class="tips-list">';
        recipe.tips.forEach(tip => {
            instructionsHTML += `
                <li>
                    <span>💡</span>
                    <span>${tip}</span>
                </li>
            `;
        });
        instructionsHTML += '</ul></div>';
    }
    
    // Render nutrition disclaimer
    instructionsHTML += `
        <div class="recipe-nutrition">
            <h3>Nutrition Information</h3>
            <p>${recipe.nutrition}</p>
        </div>
    </div>`;
    
    container.innerHTML = ingredientsHTML + instructionsHTML;
}

function renderRelatedRecipes(recipe) {
    const relatedRecipes = recipes.filter(r => r.category === recipe.category && r.id !== recipe.id).slice(0, 4);
    
    if (relatedRecipes.length > 0) {
        const container = document.getElementById('relatedRecipes');
        const section = document.getElementById('relatedSection');
        
        section.style.display = 'block';
        
        relatedRecipes.forEach(relatedRecipe => {
            container.innerHTML += createRecipeCard(relatedRecipe);
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

function setupActionButtons() {
    document.getElementById('saveRecipeBtn').addEventListener('click', function() {
        showToast('Recipe saved to your collection!', 'success');
    });
    
    document.getElementById('shareRecipeBtn').addEventListener('click', function() {
        showToast('Recipe link copied to clipboard!', 'success');
    });
}
