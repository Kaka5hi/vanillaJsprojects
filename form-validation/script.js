const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const eMail = document.getElementById('e-mail');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim(); // trim is a array method which is used to check for whitespaces
    const lastNameValue= lastName.value.trim();
    const eMailValue= eMail.value.trim();
    const passwordValue= password.value.trim();

    if(firstNameValue === '') {
        //show error -> add error class
        setErrorFor(firstName, 'First Name cannot be blank');
    } else {
        //add success class
        setSuccessFor(firstName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    if(eMailValue === '') {
        setErrorFor(eMail, 'Email cannot be blank');
    } else if(!isEmail(eMailValue)) {
        setErrorFor(eMail, 'Email is not valid');
    } else {
        setSuccessFor(eMail);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //for form control
    const small = formControl.querySelector('small');

    //add error message inside small tag
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //for form control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}