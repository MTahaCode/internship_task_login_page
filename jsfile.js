const pressbutton = () => {
    let tag = document.getElementById("demo").textContent = "Hallo guten tag";
}

const showStuff = (event) => {
    let data = new FormData(document.getElementById("register_form"));

    let name = data.get("name_input");
    let email = data.get("email_input");
    let password = data.get("password_input");

    document.getElementById("status_bar").textContent = 
    `Name: ${name}, Email: ${email}, Password: ${password}`;
}

document.getElementById("login_form").addEventListener("submit", (event) => {
    event.preventDefault();
})