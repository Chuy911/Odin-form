const nameInput = document.getElementById('First-Name');
const lnameInput = document.getElementById('Last-Name');
const emailInput = document.getElementById('Email');
const phoneInput = document.getElementById('Phone-Number');
const passInput = document.getElementById('Password');
const confirmInput = document.getElementById('Confirmation');
const button = document.getElementById('Submit');

nameInput.addEventListener('input', () => {
    nameInput.setCustomValidity("");
    nameInput.checkValidity();
})


nameInput.addEventListener("invalid", () => {
    if(nameInput.value === '')
    nameInput.setCustomValidity("Enter your first name");
    else
    nameInput.setCustomValidity("Usernames can only contain upper and lower letters");
});

lnameInput.addEventListener("invalid", () => {
    if(nameInput.value === '')
    nameInput.setCustomValidity("Enter your last name");
    else
    nameInput.setCustomValidity("Usernames can only contain upper and lower letters");
});

emailInput.addEventListener("invalid", () => {
    if(nameInput.value === '')
    nameInput.setCustomValidity("Enter your email");
    else
    nameInput.setCustomValidity("Emails must have a proper address");
});

phoneInput.addEventListener("invalid", () => {
    if(nameInput.value === '')
    nameInput.setCustomValidity("Enter your phone number");
    else
    nameInput.setCustomValidity("Phone numbers must contain only numbers and in format of xxx-xxx-xxxx");
});

passInput.addEventListener('input', () => {
    nameInput.setCustomValidity("");
    nameInput.checkValidity();
})

button.addEventListener("click", () => {
    if(passInput.value !== confirmInput.value)
    passInput.setCustomValidity('Passwords do not match');
    else
    passInput.setCustomValidity("");
    passInput.checkValidity();
})