function toggleLanguage() {
    const englishSection = document.getElementById('english-section');
    const spanishSection = document.getElementById('spanish-section');
    const toggleButton = document.getElementById('language-toggle');

    if (englishSection.style.display === 'none') {
        englishSection.style.display = 'block';
        spanishSection.style.display = 'none';
        toggleButton.textContent = 'Español';
    } else {
        englishSection.style.display = 'none';
        spanishSection.style.display = 'block';
        toggleButton.textContent = 'English';
    }
}

// Initialize the page with English section visible and Spanish section hidden
window.onload = () => {
    document.getElementById('english-section').style.display = 'block';
    document.getElementById('spanish-section').style.display = 'none';
    document.getElementById('language-toggle').textContent = 'Español';
};
