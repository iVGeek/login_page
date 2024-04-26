document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var usernameInput = document.getElementById('username');
            var passwordInput = document.getElementById('password');
            var username = usernameInput.value;
            var password = passwordInput.value;
            // Here you can perform further actions, like sending the login credentials to a server for authentication
            console.log('Username:', username);
            console.log('Password:', password);
        });
    }
});
