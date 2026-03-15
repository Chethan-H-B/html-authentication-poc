function togglePassword(id) {
  let input = document.getElementById(id);

  if (input.type === "password") input.type = "text";
  else input.type = "password";
}

function passwordStrength() {
  let password = document.getElementById("password").value;
  let strength = document.getElementById("strength");

  if (password.length < 4) strength.innerHTML = "Weak Password";
  else if (password.length < 8) strength.innerHTML = "Medium Password";
  else strength.innerHTML = "Strong Password";
}

function toggleDark() {
  document.body.classList.toggle("dark-mode");
}
