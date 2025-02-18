document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.navbar-toggler');
    const mainNav = document.querySelector('.main-nav ul');

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('show');
    });

    // Search bar toggle
    const searchIcon = document.querySelector('.fa-search');
    searchIcon.addEventListener('click', () => {
        // Implement the search bar toggle logic here
    });

    // Case studies tabs
    const tabButtons = document.querySelectorAll('.case-studies .btn');
    const tabContent = document.querySelector('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Load the appropriate content for the selected tab
            tabContent.innerHTML = `Content for ${button.textContent}`;
        });
    });

    // Cookie consent
    const consentButton = document.querySelector('.cookies-consent button');
    consentButton.addEventListener('click', () => {
        document.querySelector('.cookies-consent').style.display = 'none';
    });
});