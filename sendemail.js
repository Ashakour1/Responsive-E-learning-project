const PUBLIC_KEY = "46aiqSBPHs4x5ZgB1"; // your public key here

// initialize emailjs
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init(PUBLIC_KEY);
})();

const contactForm = document.querySelector("#form");
const alertSuccess = document.querySelector(".alert-success");
const alertError = document.querySelector(".alert-error");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // function check empty
    checkEmpty([username,Email,textArea]);
    checkEmail(Email);
    checkMassage(Textme);

  if (!this.full_name.value || !this.email.value || !this.message.value) {
    showErrorAlert("Please fill all fields!");
    return;
  }

  const templateParams = {
    full_name: this.full_name.value,
    email: this.email.value,
    message: this.message.value,
  };

  /**
   * @param {string} service_id
   * @param {string} template_id
   * @param {object} template_params
   * @param {string} PUBLIC_KEY
   */
  emailjs
    .send("contact", "template_cee7td9", templateParams, PUBLIC_KEY)
    .then(() => {
      showSuccessAlert("Email Sent Successfully!");
      this.reset();
      removeIcons();   
      
         
    })
    .catch((error) => {
      showErrorAlert("Something Went Wrong Please Try Again!");
      console.log("FAILED...", error);
    });
});

// remove icons
const removeIcons = (input) => {
	const successIcons = document.querySelectorAll('.success-message-icon');
	const errorIcons = document.querySelectorAll('.error-message-icon');
 

	errorIcons.forEach(errorIcon => {
		errorIcon.style.visibility = 'hidden';
	});
 
	successIcons.forEach(successIcon => {
		successIcon.style.visibility = 'hidden';
	});
};

// remove border 



// show success alert message
const showSuccessAlert = (message) => {
  // select error message element
  const successMessage = document.querySelector(".success-message");
  const submitBtn = document.querySelector(".submit-btn");

  // set error message
  successMessage.textContent = message;

  alertSuccess.classList.remove("hide");
  submitBtn.disabled = true;

  setTimeout(() => {
    alertSuccess.classList.add("hide");

    // reset error message
    successMessage.textContent = "";
    submitBtn.disabled = false;
  }, 500);
};

// show error alert message
const showErrorAlert = (message) => {
  // select error message element
  const errorMessage = document.querySelector(".error-message");
  const submitBtn = document.querySelector(".submit-btn");


  // set error message
  errorMessage.textContent = message;

  alertError.classList.remove("hide");
  submitBtn.disabled = true;

  setTimeout(() => {
    alertError.classList.add("hide");

    // reset error message
    errorMessage.textContent = "";
    submitBtn.disabled = false;
  }, 1500);
};
