// ## Responsive

document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const navigation = document.querySelector(".navigation");

    burgerMenu.addEventListener("click", function() {
        navigation.classList.toggle("show");
    });
});

// ## Validacion de formulario

let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log('Email:', email.value);
    console.log('Password:', password.value);
    // process and send to API 
});


