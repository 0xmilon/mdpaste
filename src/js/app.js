// Mobile menu toggle
// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add your JavaScript functionality here
    console.log('App initialized');

    // Theme Toggle Functionality
    const themeToggleBtn = document.querySelector('button[aria-label="Theme"]');
    const htmlElement = document.documentElement;
    const moonIcon = themeToggleBtn.querySelector('[data-lucide="moon"]');
    
    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Set initial theme
    if (currentTheme === 'light') {
        htmlElement.classList.remove('bg-mocha-base');
        moonIcon.setAttribute('data-lucide', 'sun');
        lucide.createIcons(); // Refresh icons
    }
    
    // Toggle theme on click
    themeToggleBtn.addEventListener('click', () => {
        const isDark = htmlElement.classList.contains('bg-mocha-base');
        
        if (isDark) {
            htmlElement.classList.remove('bg-mocha-base');
            moonIcon.setAttribute('data-lucide', 'sun');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('bg-mocha-base');
            moonIcon.setAttribute('data-lucide', 'moon');
            localStorage.setItem('theme', 'dark');
        }
        
        lucide.createIcons(); // Refresh icons to update sun/moon
    });
});
