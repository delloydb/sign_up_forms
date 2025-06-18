const form = document.getElementById('signupForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    alert('Passwords do not match. Please try again.');
    confirmPassword.classList.add('error');
    confirmPassword.focus();
  } else {
    confirmPassword.classList.remove('error');
  }
});
