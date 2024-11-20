function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'username' && password === 'password') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
} 