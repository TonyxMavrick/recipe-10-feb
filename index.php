<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
       <!-- Histats.com  START  (aync)-->
<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,5008154,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5008154&101" alt="web statistics" border="0"></a></noscript>
<!-- Histats.com  END  -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Discover delicious recipes, one flavor at a time. Easy, tasty, and tested recipes for every meal, mood, and moment.">
    <meta name="keywords" content="recipes, cooking, food, breakfast, lunch, dinner, desserts, healthy recipes, vegan, keto">
    <title>FlavorLoop - Discover Delicious Recipes</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav-container">
            <div class="nav-content">
                <a href="index.html" class="logo">
                    <div class="logo-icon">🍳</div>
                    <span class="logo-text">FlavorLoop</span>
                </a>
                
                <div class="nav-links desktop-nav">
                    <a href="index.html" class="nav-link active">Home</a>
                    <a href="recipes.html" class="nav-link">Recipes</a>
                    <a href="about.html" class="nav-link">About Us</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                </div>
                
                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            
            <div class="mobile-nav" id="mobileNav">
                <a href="index.html" class="nav-link active">Home</a>
                <a href="recipes.html" class="nav-link">Recipes</a>
                <a href="about.html" class="nav-link">About Us</a>
                <a href="contact.html" class="nav-link">Contact</a>
            </div>
        </nav>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1690299564243-9879e2f22654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="Delicious food spread">
                <div class="hero-overlay"></div>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">Discover Delicious Recipes, One Flavor at a Time</h1>
                <p class="hero-subtitle">Easy, tasty, and tested recipes for every meal, mood, and moment.</p>
                <div class="hero-buttons">
                    <a href="recipes.html" class="btn btn-primary">
                        <span>Explore Recipes</span>
                        <i class="fas fa-chevron-right"></i>
                    </a>
                    <a href="recipes.html" class="btn btn-secondary">Today's Special Picks</a>
                </div>
            </div>
        </section>

        <!-- Featured Recipes Section -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Featured Recipes</h2>
                    <p class="section-subtitle">Handpicked favorites that our community loves. Try these delicious recipes today!</p>
                </div>
                <div class="recipe-grid" id="featuredRecipes">
                    <!-- Recipes will be loaded here by JavaScript -->
                </div>
                <div class="text-center">
                    <a href="recipes.html" class="btn btn-primary">
                        <span>View All Recipes</span>
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Recipe Categories Section -->
        <section class="section bg-orange-light">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Recipe Categories</h2>
                    <p class="section-subtitle">Browse recipes by category to find exactly what you're craving</p>
                </div>
                <div class="category-grid">
                    <a href="recipes.html?category=Breakfast" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-coffee"></i>
                        </div>
                        <div class="category-content">
                            <h3>Breakfast Recipes</h3>
                        </div>
                        <i class="fas fa-chevron-right category-arrow"></i>
                    </a>
                    <a href="recipes.html?category=Dinner" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <div class="category-content">
                            <h3>Lunch & Dinner</h3>
                        </div>
                        <i class="fas fa-chevron-right category-arrow"></i>
                    </a>
                    <a href="recipes.html?category=Healthy" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-heart-pulse"></i>
                        </div>
                        <div class="category-content">
                            <h3>Healthy Recipes</h3>
                        </div>
                        <i class="fas fa-chevron-right category-arrow"></i>
                    </a>
                    <a href="recipes.html?category=Desserts" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-cake-candles"></i>
                        </div>
                        <div class="category-content">
                            <h3>Desserts</h3>
                        </div>
                        <i class="fas fa-chevron-right category-arrow"></i>
                    </a>
                    <a href="recipes.html?category=Quick%20Meals" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div class="category-content">
                            <h3>Quick & Easy Meals</h3>
                        </div>
                        <i class="fas fa-chevron-right category-arrow"></i>
                    </a>
                    <a href="recipes.html?category=Vegan" class="category-card">
                        <div class="category-icon">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <div class="category-content">
                            <h3>Vegan / Keto / Low-Carb</h3>
                        </div>
                        <i class="fas fa-chevron-right category-arrow"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Why FlavorLoop Section -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Why FlavorLoop</h2>
                    <p class="section-subtitle">Your trusted source for delicious, tested recipes that work every time</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3>Simple Step-by-Step Recipes</h3>
                        <p>Easy-to-follow instructions that anyone can master</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-circle-check"></i>
                        </div>
                        <h3>Kitchen-Tested Dishes</h3>
                        <p>Every recipe is tested to ensure perfect results</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3>Beginner Friendly</h3>
                        <p>Perfect for cooks of all skill levels</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h3>USA-Inspired & Global Flavors</h3>
                        <p>Diverse recipes from around the world</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-unlock"></i>
                        </div>
                        <h3>Free Access to Recipes</h3>
                        <p>All our recipes are completely free, forever</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Popular This Week Section -->
        <section class="section bg-gray-light">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Popular This Week</h2>
                    <p class="section-subtitle">Trending recipes that everyone is making right now</p>
                </div>
                <div class="recipe-grid" id="popularRecipes">
                    <!-- Recipes will be loaded here by JavaScript -->
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="section">
            <div class="container">
                <div class="newsletter-box">
                    <i class="fas fa-envelope newsletter-icon"></i>
                    <h2 class="newsletter-title">Get Fresh Recipes Delivered to Your Inbox</h2>
                    <p class="newsletter-subtitle">Join our community and receive weekly recipes, cooking tips, and exclusive content.</p>
                    <form class="newsletter-form" id="newsletterForm">
                        <input type="email" placeholder="Enter your email" required class="newsletter-input">
                        <button type="submit" class="btn btn-white">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="logo">
                        <div class="logo-icon">🍳</div>
                        <span class="logo-text">FlavorLoop</span>
                    </a>
                    <p class="footer-description">
                        Discover delicious recipes, one flavor at a time. Easy, tasty, and tested recipes for every meal, mood, and moment.
                    </p>
                    <div class="footer-contact">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+1-839-392-3920</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>idea@flavourloop.in</span>
                        </div>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="recipes.html">Recipes</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="terms.html">Terms & Conditions</a></li>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                    </ul>
                    <h3 class="mt-6">Follow Us</h3>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2026 FlavorLoop. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Toast Notification -->
    <div class="toast" id="toast"></div>

    <script src="recipes-data.js"></script>
    <script src="script.js"></script>
</body>
</html>
