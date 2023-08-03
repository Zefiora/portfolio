function validateForm() {
    let x = document.forms["contact-form"]["ffname"].value;
    let r = document.forms["contact-form"]["flname"].value;
    let m = document.forms["contact-form"]["fphone"].value;
    let z = document.forms["contact-form"]["femail"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else if (r == "") {
        alert("Last name must be filled out");
        return false;
    } else if (m == "") {
        alert("Please enter 10 digit phone number without dashes");
        return false;
    } else if (z == "") {
        alert("Please enter email address.");
        return false;
    }
  } 

const email = document.getElementById("femail");
email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Field requires a valid email address");
  } else {
    email.setCustomValidity("");
  }
});
