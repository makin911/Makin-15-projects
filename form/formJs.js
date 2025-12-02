
function checkValid() {
  let valid = true;

  //name validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name === "" || !/^[A-Za-z ]+$/.test(name)) {
    nameError.textContent = "Please enter a valid name (letters only)";
    valid = false;
    nameError.style.color = 'red'

  } else {
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    nameError.style.color = 'green'
  }

  //phone validation
  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phoneError");
  if (!/^[0-9]{10,15}$/.test(phone)) {
    phoneError.textContent = "Enter a valid phone number (10–15 digits)";
    valid = false;
    phoneError.style.color = 'red'

  } else {
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    phoneError.style.color = 'green'

  }


  // Email Validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address";
    valid = false;
    emailError.style.color = 'red'

  } else {
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    emailError.style.color = 'green'

  }


  // message Validation
  const msg = document.getElementById("msg").value.trim();
  const msgError = document.getElementById("msgError");
  if (msg == "") {
    msgError.textContent = "Enter youre message";
    valid = false;
    msgError.style.color = 'red'

  } else {
    msgError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    msgError.style.color = 'green'

  }



  if (valid) {
    alert("Form submitted successfully!");

  }
}







