const nameInput = document.getElementById('First-Name');

nameInput.addEventListener('input', () => {
    nameInput.setCustomValidity("");
    nameInput.checkValidity();
})


nameInput.addEventListener("invalid", () => {
    if(nameInput.value === '')
    nameInput.setCustomValidity("Enter your name");
    else
    nameInput.setCustomValidity("Usernames can only contain upper and lower letters");
});