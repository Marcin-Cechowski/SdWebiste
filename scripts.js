document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.navbar-toggler');
    const mainNav = document.querySelector('.main-nav ul');

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('show');
    });


    const searchIcon = document.querySelector('.fa-search');
    searchIcon.addEventListener('click', () => {

    });
    $(document).ready(function() {
        $('#branzeCarousel').carousel({
            interval: 10000, 
            pause: false
        });
    });

    const tabButtons = document.querySelectorAll('.case-studies .btn');
    const tabContent = document.querySelector('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContent.innerHTML = `Content for ${button.textContent}`;
        });
    });

    const consentButton = document.querySelector('.cookies-consent button');
    consentButton.addEventListener('click', () => {
        document.querySelector('.cookies-consent').style.display = 'none';
    });
});
// Open Popup
function openPopup() {
    document.getElementById("popupForm").style.display = "flex";
}

// Close Popup
function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}

// Show "Other Business" Field When Selected
document.getElementById("business_type").addEventListener("change", function() {
    let otherField = document.getElementById("other_business");
    if (this.value === "other") {
        otherField.style.display = "block";
    } else {
        otherField.style.display = "none";
    }
});


