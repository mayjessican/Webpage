(function () {
  var $form = document.querySelector('#register-form');
  var $emailInput = document.querySelector('#contact-email');

  function validateEmail() {
    var value = emailInput.value;
    var hasAtSign = value.indexOf('@') > -1;
    var hasDot = value.indexOf('.') > -1;
    return value && hasAtSign && hasDot;

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field');
      return false;
    }

    if (value.indexOf ('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function showErrorMessage(input, message) {
    var conatiner = input.parentElement; //The .input-wrapper

    //Remove an existing error
    var error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    //Now add the error if the message isn't empty
    if (message) {
      var error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChlid(error);
    }
  }

  function validateForm() {
    var isValidEmail = validateEamil();
    return isValidEmail && isValidPassword;
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  })
})();
