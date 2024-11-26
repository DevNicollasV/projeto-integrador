const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if (email && senha) {
        window.location.href = "../pages/home.html";
    } else {
        alert("Por favor, preencha todos os campos!");
    }
});