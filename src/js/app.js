// Mobile menu toggle
// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add your JavaScript functionality here
    console.log('App initialized');

    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Toggle dark class on html element
            document.documentElement.classList.toggle('dark');
            
            // Update localStorage
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    }
});
