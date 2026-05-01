const supabaseUrl = "https://hwffqfjimqjrapzesbaa.supabase.co";
const supabaseKey = "sb_publishable_7-r8PC-K_jdJ0wZeTcctzg_-YT9M9wp";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// ELEMENTOS
const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");

// 🔥 TROCA DE TELA (CORRIGIDO)
function showLogin() {
  loginBox.classList.remove("hidden");
  registerBox.classList.add("hidden");
}

function showRegister() {
  registerBox.classList.remove("hidden");
  loginBox.classList.add("hidden");
}

// 🔐 LOGIN
async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) return msg("Erro no login");

  msg("Login OK 🚀");
}

// 🆕 REGISTER
async function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;
  const terms = document.getElementById("termsCheck").checked;

  if (password !== confirm) return msg("Senhas diferentes");
  if (!terms) return msg("Aceite os termos");

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) return msg("Erro ao criar conta");

  msg("Conta criada! Verifique o email 🚀");
}

// MSG
function msg(t) {
  document.getElementById("msg").innerText = t;
}
