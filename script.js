let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    validation();

});

function clear_error() {
    document.getElementById("name_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("password_error").innerHTML = "";
    document.getElementById("password_error2").innerHTML = "";
}

function validation() {
    let name = document.getElementById("name").value;
    let name_error = document.getElementById("name_error");
    let email = document.getElementById("email").value;
    let email_error = document.getElementById("email_error");
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let pass_error = document.getElementById("password_error");
    let pass_error2 = document.getElementById("password_error2");

    // let icon = document.getElementById("validation-icon"); 
    let pass_cond = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%&*]{6,20}$/;

    clear_error();
    // icon.classList.remove("fa-check", "fa-xmark", "red-icon", "green-icon");
    let valid = true;

    if (name.length < 6) {
        name_error.innerHTML = "*enter full name";
        // icon.classList.add("fa-xmark", "red-icon");
        valid = false;
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        email_error.innerHTML = "*enter valid email";
        // icon.classList.add("fa-xmark", "red-icon");
        valid = false;
    }


    if (!pass_cond.test(pass1)) {
        pass_error.innerHTML = "Contain one lowercase, one uppercase, between 6 and 20 characters long, include (!@#$%&*).";
        // icon.classList.add("fa-xmark", "red-icon");
        valid = false;
    } if (pass1 != pass2) {

        pass_error2.innerHTML = "Password does not match";
        valid = false;
    } 
    if (valid) {
        alert("Form submitted successfully!");
    }


    // icon.classList.add("fa-check", "green-icon");

    valid = true;
}
