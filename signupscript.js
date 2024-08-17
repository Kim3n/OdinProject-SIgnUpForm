document.getElementById('signupForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password_field').value;
    const confirmPassword = document.getElementById('confirm_password_field').value;
    
    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        alert("Passwords do not match!");
    }
});

function validateForm() {
    const fnameField = document.getElementById('first_name_field');
    const lnameField = document.getElementById('last_name_field');
    const emailField = document.getElementById('email_field');
    const phoneField = document.getElementById('phone_number_field');
    const isfnameFilled = fnameField.value.trim() !== '';
    const islnameFilled = lnameField.value.trim() !== '';
    const isemailFilled = emailField.value.trim() !== '';
    const isphoneFilled = phoneField.value.trim() !== '';

    var password = document.getElementById('password_field').value;
	var confirm_password  = document.getElementById('confirm_password_field').value;
    var led = document.getElementById('dot');
    if(isfnameFilled && islnameFilled && isemailFilled && isphoneFilled){
        if(password == confirm_password && password !="" && confirm_password != "") {
            led.style.backgroundColor = 'green'; 
            led.style.boxShadow = '0px 0px 10px green'; 
        }
        else {
            led.style.backgroundColor = "#ca1a21"; 
            led.style.boxShadow = '0px 0px 10px #ff552e'; 
        }
    }
    else{
        led.style.backgroundColor = "#ca1a21"; 
        led.style.boxShadow = '0px 0px 10px #ff552e'; 
    }
}

document.getElementById('confirm_password_field').onkeyup = validateForm;
document.getElementById('password_field').onkeyup = validateForm;
document.getElementById('first_name_field').onkeyup = validateForm;
document.getElementById('last_name_field').onkeyup = validateForm;
document.getElementById('email_field').onkeyup = validateForm;
document.getElementById('phone_number_field').onkeyup = validateForm;