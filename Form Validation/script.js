
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('msg').value.trim();

    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successMsg = document.getElementById('success-msg');

    
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    successMsg.style.display = "none";

    let isValid = true;

   
    if (name === "") {
        nameError.textContent = "Full Name is required.";
        nameError.style.display = "block";
        isValid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    }

    
    if (message === "") {
        messageError.textContent = "Message is required.";
        messageError.style.display = "block";
        isValid = false;
    }

   
    if (isValid) {
        successMsg.style.display = "block";
        document.getElementById('contact-form').reset();
    }
});
