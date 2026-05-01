const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");

// 🔥 TROCA LOGIN
function showLogin() {
  loginBox.style.display = "block";
  registerBox.style.display = "none";
}

// 🔥 TROCA REGISTER
function showRegister() {
  loginBox.style.display = "none";
  registerBox.style.display = "block";
}

// MSG
function msg(t) {
  document.getElementById("msg").innerText = t;
}
