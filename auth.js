document.addEventListener('DOMContentLoaded', function () {
    // Handle Sign-Up
    const signupForm = document.querySelector('#signup-form'); // Select the sign-up form
    const signupMessageDiv = document.getElementById('signup-message'); // Div to display sign-up messages

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;

            // Validate form inputs
            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                signupMessageDiv.textContent = "All fields are required.";
                signupMessageDiv.style.color = "#fbbf24"; // Warning color
                return;
            }

            if (password !== confirmPassword) {
                signupMessageDiv.textContent = "Passwords do not match.";
                signupMessageDiv.style.color = "#fbbf24"; // Warning color
                return;
            }

            // Simulate successful account creation
            signupMessageDiv.textContent = "Account created successfully! Redirecting...";
            signupMessageDiv.style.color = "#38bdf8"; // Success color

             // Store credentials in local storage
            localStorage.setItem('username', username);
        localStorage.setItem('password', password);


            // Add a loading spinner or animation
            const button = signupForm.querySelector('button');
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
            button.disabled = true;

            // Redirect to the login page after 2 seconds
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect to login page
            }, 2000);
        });
    }

    // Handle Login
    const loginForm = document.querySelector('#login-form'); // Select the login form
    const loginMessageDiv = document.getElementById('login-message'); // Div to display login messages

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get form values
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            // Retrieve stored credentials
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');


             // Simulate login validation
            if (username === storedUsername && password === storedPassword) {
                loginMessageDiv.textContent = "Login successful! Redirecting...";
                loginMessageDiv.style.color = "#38bdf8"; // Success color
                // Add a loading spinner or animation
                const button = loginForm.querySelector('button');
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
                button.disabled = true;

                // Redirect to dashboard.html after 2 seconds
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 2000);
            } else {
                loginMessageDiv.textContent = "Invalid username or password. Please try again.";
                loginMessageDiv.style.color = "#fbbf24"; // Warning color
            }
        });
    }
});