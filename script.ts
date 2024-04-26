document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const usernameInput = document.getElementById('username') as HTMLInputElement;
            const passwordInput = document.getElementById('password') as HTMLInputElement;
            const username = usernameInput.value;
            const password = passwordInput.value;

            // Here you can perform further actions, like sending the login credentials to a server for authentication
            console.log('Username:', username);
            console.log('Password:', password);
        });
    }
});

