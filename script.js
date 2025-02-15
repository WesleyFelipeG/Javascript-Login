function showPassword() {
    var passwordBox = document.getElementById('password')
    var showPasswordButton = document.getElementById('showPasswordButton')

    if (passwordBox.type === 'password') {
        passwordBox.type = 'text';
        showPasswordButton.classList.remove('bxs-lock-alt');
        showPasswordButton.classList.add('bxs-lock-open-alt');
    } else {
        passwordBox.type = 'password';
        showPasswordButton.classList.remove('bxs-lock-open-alt');
        showPasswordButton.classList.add('bxs-lock-alt')
    }
}