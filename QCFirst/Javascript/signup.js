    const form = document.getElementById('form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const student = document.getElementById('student');
    const teacher = document.getElementById('teacher');
    const email = document.getElementById('email');
    const password= document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    });


function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();

    //checks for the inputs
    
    if(firstNameValue === '') {
        //show the error because blank
        //add the error class
        setErrorFor(firstName, "First Name Cannot Be Blank");
    } else {
        //success
        setSuccessFor(firstName);

    }
    //lastNameInput
    
    if(lastNameValue === '') {
        //show the error because blank
        //add the error class
        setErrorFor(lastName, "Last Name Cannot Be Blank");
    } else {
        //success
        setSuccessFor(lastName);

    }
    // teacher/student verification using ajax
    
    if ($("input[type=radio]:checked").length == 0) {
        setErrorFor(student, "You Must Have An Option Selected")
    } else {
        setSuccessFor(student);
    }
    //email verification

    if(emailValue=== ''){
        setErrorFor(email, 'Email Cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    //password Verification

    if(passwordValue === '') {
        setErrorFor(password, "Password Cannot Be Blank");
    } else {
        setSuccessFor(password);
    }

    if(passwordConfirmValue === '' ) {
        setErrorFor(passwordConfirm, "Confirm Password");
    } else if(passwordConfirmValue !== passwordValue) {
        setErrorFor(passwordConfirm, "Password Must Match");
    } else {
        setSuccessFor(passwordConfirm);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-group
    const small = formControl.querySelector('small');

    small.innerText = message;

    //add error to the class name because blanked
    formControl.className = "form-group error col-sm-12 col-md-12 col-lg-12 text-md-center";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-group success col-sm-12 col-md-12 col-lg-12 text-md-center";
}

//email regex tested
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}