function passwordVerified() {
    var password = document.getElementById('password');
    var retypePass = document.getElementById('retype_password');
    
    var errorMessage = '';
    var isValid = true;
    
    //Check if password match
    if (password != retypePass){
        isValid = false;
        errorMessage = 'Password does not match';
    }
    
    //Check length
    if (password.length < 8 || password.length > 20){
        isValid = false;
        errorMessage = 'Number of letters is between 8 and 20';
    }
    
    //Check special symbol
    var specialSymbol = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).*$/;
    if(!specialSymbol.test(password)){
        isValid = false;
        errorMessage = 'Please include !@#$%^&* symbol in your password';
    }

    // Display verification status
    var statusParagraph = document.getElementById('verification_status');
    if (isValid) {
        statusParagraph.style.color = "green";
        statusParagraph.textContent = "Password verified!";
    } else {
        statusParagraph.style.color = "red";
        statusParagraph.textContent = errorMessage;
    }
}