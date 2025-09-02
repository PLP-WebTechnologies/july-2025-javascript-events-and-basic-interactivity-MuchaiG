// DARK MODE TOGGLE
document.getElementById("themeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// FORM VALIDATION
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  let valid = true;

  // Get values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous errors
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Username validation
  if (username.length < 3) {
    document.getElementById("usernameError").textContent = "Username must be at least 3 characters.";
    valid = false;
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If all validations pass
  if (valid) {
    alert("Form submitted successfully!");
    document.getElementById("signupForm").reset();
  }
});

// COMMENTS BOX
document.getElementById("messageBox").addEventListener("input", function() {
  const maxLength = 200;
  const currentLength = this.value.length;
  document.getElementById("charCount").textContent = `${currentLength} / ${maxLength} characters`;
});

// INTERACTIVE LINK
document.getElementById("funLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent page reload
  document.getElementById("linkMessage").textContent = "🎉 You clicked the link! 🎉";
});
