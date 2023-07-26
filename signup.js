document.addEventListener("DOMContentLoaded", function () {
    // the form element
    const signUpForm = document.querySelector("form");
  
    // Handle form submission
    signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(signUpForm);
      for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
      }

    });
  });
  
  