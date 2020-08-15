
// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

function checkUserName() {
    var uname = document.getElementById("usertext").value;
    if (uname == "" || uname == null) {
        alert("Username can't be null and empty");
        return false;
    }
    if (uname.length < 8) {
        alert("Username can't be lest than 8 characters");
        return false;
    }
    if (uname.length > 15) {
        alert("Username can't be more than 15 characters");
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if (uname.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        return false;
    }
    return true;
}


// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
    var uemail = document.getElementById("emailtext");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
    var passid = document.getElementById("passwordtext");
    var decimal = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (passid.value == null || passid.value == "") {
        alert("Password can't be null or empty");
        return false;
    }


    if (passid.value.match(decimal)) {
        return true;
    }
    else {
        alert('Wrong...!')
        return false;
    }
} 