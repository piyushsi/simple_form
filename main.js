var form = document.querySelector('.box_content');

var button = document.querySelector('button');

var email = document.querySelector('.input_email');

var password = document.querySelector('.input_password');

var error = document.querySelector('.error');

var emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    if (!email.value) {
        error.innerText = 'Email Required';
    } else if (!emailValidation.test(email.value)) {
        error.innerText = 'Invalid Email';
    } else if (!password.value) {
        error.innerText = 'Password Required';
    } else {
        error.innerText = '';
        alert('submitted')
    }

}