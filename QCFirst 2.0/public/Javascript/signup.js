// JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

/*
function checkInputs() {
    var form = document.getElementById("form");
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var student = document.getElementById("student");
    var teacher = document.getElementById("teacher");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var passwordConfirm = document.getElementById("password-confirm");
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();

    if (firstNameValue !== '' && lastNameValue !== '' && emailValue !== '' && passwordValue !== '' && passwordConfirmValue !== '') {
        if (email.match(emailRegex)) {
            if (student.checked || teacher.checked && !(student.checked && teacher.checked)) {
                if (password.length >= 8) {
                    if (password !== passwordConfirm) {
                        setSuccessFor(firstName, lastName, student, email, password, passwordConfirm);
                        return true;
                    } else {
                        setErrorFor(passwordConfirm);
                        return false;
                    }
                } else {
                    setErrorFor(password);
                    return false;
                }
            } else {
                setErrorFor(email);
                return false;
            }
        } else {
            setErrorFor(firstName, lastName, student, email, password, passwordConfirm);
            return false;
        }
    }

    //checks for the inputs
    /*
    if(firstNameValue === "") {
      //show the error because blank
      //add the error class
      setErrorFor(firstName, "First Name Cannot Be Blank");
    } else {
      //success
      setSuccessFor(firstName);
    }
    //lastNameInput
  
    if (lastNameValue === "") {
      //show the error because blank
      //add the error class
      setErrorFor(lastName, "Last Name Cannot Be Blank");
    } else {
      //success
      setSuccessFor(lastName);
    }
    // teacher/student verification using ajax
  
    if ($("input[type=radio]:checked").length == 0) {
      setErrorFor(student, "You Must Have An Option Selected");
    } else if ($("input[type=radio]:checked").length == 2) {
      setErrorFor(student, "You Must Have Only One Option Selected");
    } else {
      setSuccessFor(student);
    }
    //email verification
  
    if (emailValue === "") {
      setErrorFor(email, "Email Cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "Email is not valid");
    } else {
      setSuccessFor(email);
    }
    //password Verification
  
    if (passwordValue === "") {
      setErrorFor(password, "Password Cannot Be Blank");
    } else {
      setSuccessFor(password);
    }
  
    if (passwordConfirmValue === "") {
      setErrorFor(passwordConfirm, "Confirm Password");
    } else if (passwordConfirmValue !== passwordValue) {
      setErrorFor(passwordConfirm, "Password Must Match");
    } else {
      setSuccessFor(passwordConfirm);
    }
      ) return true;
  }

    function setErrorFor(input, message) {
        const formControl = input.parentElement; //.form-group
        const small = formControl.querySelector("small");

        small.innerText = message;

        //add error to the class name because blanked
        formControl.className =
            "form-group error col-sm-12 col-md-12 col-lg-12 text-md-center";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className =
            "form-group success col-sm-12 col-md-12 col-lg-12 text-md-center";
    }

    //email regex tested
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }
    
};
*/