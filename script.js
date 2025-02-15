//---------------------------------------------------------------------------------
// Password visibility toggle
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
//---------------------------------------------------------------------------------
// "Hello [user]!" message
document.getElementById('loginScreen').addEventListener('submit', function (u) {
    u.preventDefault();

    var user = document.getElementById('user').value;
    if (user) {
        document.getElementById('loginScreen').style.display = 'none';
        var successfulLoginMessage = document.getElementById('successfulLoginMessage');
        document.getElementById('helloUser').textContent = user;
        successfulLoginMessage.style.display = 'block';
    }
});