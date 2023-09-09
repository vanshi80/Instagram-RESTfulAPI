const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector(".btn");

usernameInput.addEventListener('input', toggleLoginButton);
passwordInput.addEventListener('input', toggleLoginButton);

function toggleLoginButton() {
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '' && passwordInput.value.trim().length >= 6) {
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.setAttribute('disabled', 'true');
    }
}
