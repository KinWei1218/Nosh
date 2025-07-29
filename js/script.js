document.addEventListener('DOMContentLoaded', function () {
    const cookieConsentPopup = document.getElementById('cookie-consent-popup');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const form = document.querySelector('#form'); // Use ID selector for the form

    // Function to get the value of a specific cookie
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            const cookieValue = parts.pop().split(';').shift();
            return cookieValue;
        }
        return null;
    };

    // Display the username cookie value if it exists
    const usernameCookie = getCookie('username');
    if (usernameCookie) {
        console.log(`Username cookie value: ${usernameCookie}`);
        // Optional: Display the value on the page
        const displayElement = document.createElement('div');
        displayElement.textContent = `Saved Username: ${usernameCookie}`;
        document.body.appendChild(displayElement);

        // Remove displayElement after some time
        setTimeout(() => {
            if (displayElement.parentNode) {
                displayElement.parentNode.removeChild(displayElement);
            }
        }, 5000); // Remove after 5 seconds
    }

    // Show the cookie consent popup if cookies haven't been accepted
    if (cookieConsentPopup && !getCookie('cookiesAccepted')) {
        cookieConsentPopup.style.display = 'block';
    }

    // Set the cookiesAccepted cookie when the user accepts cookies
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function () {
            document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // Cookie expires in 1 year
            console.log('Cookies accepted');
            cookieConsentPopup.style.display = 'none';
        });
    }

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission for testing
            const username = form.elements['name'].value;

            // Check if cookies have been accepted
            if (getCookie('cookiesAccepted')) {
                document.cookie = `username=${encodeURIComponent(username)}; path=/; max-age=86400`; // Cookie expires in 1 day
                console.log(`Username cookie set: ${username}`);
                // Optionally, submit the form programmatically if needed
                //form.submit();
            } else {
                console.log('Cookies have not been accepted. Username not saved.');
            }
        });
    }
});