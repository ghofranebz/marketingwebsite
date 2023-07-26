// script.js

// Navigation Menu Toggle
const MenuItems = document.getElementById("MenuItems");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  MenuItems.classList.toggle("show");
});

// Form Validation
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) {
    formFeedback.innerHTML = "Please fill out all fields correctly.";
    formFeedback.style.color = "#ff4145";
  } else {
    formFeedback.innerHTML = "Message sent successfully!";
    formFeedback.style.color = "#4caf50";

    // You can use AJAX or other methods here to send the form data to your server.
    // For this example, we are just displaying a success message.
  }
});

function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Regular expressions for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    valid = false;
  }

  if (!emailRegex.test(emailValue)) {
    valid = false;
  }

  return valid;
}
// Add smooth scroll to navigation links
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
