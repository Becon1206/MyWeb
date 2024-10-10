function reloadPage() {
    location.reload();
}

const loginLink = document.getElementById('login-link');
const loginContainer = document.getElementById('login-container');
const overlay = document.getElementById('overlay');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// When the login link is clicked, show the login box
loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginContainer.classList.add('show');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
    loginContainer.classList.remove('show');
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 300); // Wait for transition
});

// Tab functionality
tabLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all links
        tabLinks.forEach(function (tab) {
            tab.classList.remove('active');
        });

        // Add active class to clicked link
        link.classList.add('active');

        // Hide all tab content sections
        tabContents.forEach(function (content) {
            content.classList.remove('active');
        });

        // Show the tab content corresponding to the clicked link
        const target = link.id.split('-')[0];
        document.getElementById(target).classList.add('active');
    });
});