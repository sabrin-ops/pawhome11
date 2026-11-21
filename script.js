const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const formMessage = document.getElementById("formMessage");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();


    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        formMessage.style.color = "red";
        return;
    }


    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        formMessage.style.color = "red";
        return;
    }


    if (message === "") {
        formMessage.textContent = "Please write your message.";
        formMessage.style.color = "red";
        return;
    }


    formMessage.textContent =
        "Thank you, " + name + "! Your message has been sent successfully.";

    formMessage.style.color = "green";

    form.reset();

});