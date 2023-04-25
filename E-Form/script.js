var frmvalidator  = new frmvalidator("registrationform");
frmvalidator.addValidation("firstName","req","Please provide your First Name");
frmvalidator.addValidation("lastName","req","Please provide your Last Name");
frmvalidator.addValidation("dateOfBirth","req","Please provide your Date Of Birth");
frmvalidator.addValidation("email","req",
  "Please enter a valid Email Address");
frmvalidator.addValidation("gender","req","Please select your Gender");
frmvalidator.addValidation("homeAddress","req","Please provide your Home Address");
frmvalidator.addValidation("phoneNumber","req","Please provide your Phone Number");
frmvalidator.addValidation("city","req","Please provide your City");
frmvalidator.addValidation("state","req","Please provide your State");
frmvalidator.addValidation("country","req","Please provide your Country");
frmvalidator.addValidation("message","req",
  "Please provide this information!");

  function myFunction() {
    alert("Your Form Was Successfully Submitted. \n Click On Okay To Continue To Payment Section.");
  }

const form = document.getElementById('enermics_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to the server here
    form.action('https://formsubmit.co/d9473a8489ae86e40bacbb5c390f0108');
  // 👇️ Reset the form here
  form.reset();
});