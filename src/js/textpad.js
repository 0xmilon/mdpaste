document.addEventListener('DOMContentLoaded', () => {
    // Auto-focus title on page load
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        titleElement.focus();
    }

    // Handle placeholder text
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(element => {
        const defaultText = element.textContent;
        
        element.addEventListener('focus', () => {
            if (element.textContent === defaultText) {
                element.textContent = '';
            }
        });

        element.addEventListener('blur', () => {
            if (element.textContent.trim() === '') {
                element.textContent = defaultText;
            }
        });
    });
});
