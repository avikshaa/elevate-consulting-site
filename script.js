// script.js

document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.getElementById("contact-btn");

  if (contactButton) {
    contactButton.addEventListener("click", () => {
      alert("Thank you for reaching out to Elevate Consulting! We'll contact you soon.");
    });
  }
});
