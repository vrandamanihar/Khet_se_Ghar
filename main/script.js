document.getElementById('signUp').addEventListener('click', function() {
  document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', function() {
  document.querySelector('.container').classList.remove('right-panel-active');
});

function validateLoginForm() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Add your authentication logic here
  // For simplicity, let's just check if both fields are filled
  if (username === "" || password === "") {
    alert("Please enter both username and password");
    return false; // Prevent form submission
  }
}

function validateSignupForm() {
  var username = document.getElementById("signupUsername").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  // Add your validation logic here
  // For simplicity, let's just check if all fields are filled
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields");
    return false; // Prevent form submission
  }
}
