// you can use this for validation or make use of "required" at the end of each input in your html codes
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

  // alert after submit
  function myFunction() {
    alert("This is a form success alert I built with JavaScript! \n Go back to your html ans js codes \n Edit the form action section, redirectory section in your HTML codes, and alert section in the js codes .");
  }

  // reset the form after submit
  function resetForm() {
  document.getElementById("eForm").reset();
  }
