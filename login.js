document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    // Simulate login validation
    if (username === "user" && password === "password") {
        message.textContent = "Login successful! Redirecting...";
        message.style.color = "#38bdf8";

        // Add a loading spinner or animation
        const button = document.querySelector('#login-form button');
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        button.disabled = true;

        // Redirect to dashboard.html after 2 seconds
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);
    } else {
        message.textContent = "Invalid username or password. Please try again.";
        message.style.color = "#fbbf24";
    }
});
