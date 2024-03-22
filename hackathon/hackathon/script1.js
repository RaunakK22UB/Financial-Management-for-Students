document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Here you can perform login authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
});
