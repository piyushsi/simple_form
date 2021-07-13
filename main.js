var form = document.querySelector('.box_content');

var button = document.querySelector('button');

var email = document.querySelector('.input_email');

var password = document.querySelector('.input_password');

var error = document.querySelector('.error');

var emailValidation = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    errorText = error.innerText;
    event.preventDefault();
    if (!email.value) {
        errorText = 'Email Required';
    } else if (!emailValidation.test(email.value)) {
        errorText = 'Invalid Email';
    } else if (!password.value) {
        errorText = 'Password Required';
    } else {
        errorText = '';
        alert('submitted')
    }

}