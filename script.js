document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submitButton").addEventListener("click", function(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");
        var phoneError = document.getElementById("phoneError");

        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";

        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var phoneInput = document.getElementById("phone");

       
        nameInput.classList.remove("error-border");
        emailInput.classList.remove("error-border");
        phoneInput.classList.remove("error-border");

        if(!name){
            nameError.textContent = "please enter your name.";
            nameInput.classList.add("error-border");
           
        }if(!email){
            emailError.textContent = "please enter your email";
            emailInput.classList.add("error-border");
          
        }if (!phone){
            phoneError.textContent = "please enter your number";
            phoneInput.classList.add("error-border");
        }

        if(name && email && phone){
            window.location.href = "../source/secondPage.html";
        }
    });
});