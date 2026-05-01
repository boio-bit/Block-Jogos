const supabaseUrl = "https://hwffqfjimqjrapzesbaa.supabase.co";
const supabaseKey = "sb_publishable_7-r8PC-K_jdJ0wZeTcctzg_-YT9M9wp";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// TABS
function showLogin() {
  document.getElementById("loginBox").classList.remove("hidden");
  document.getElementById("registerBox").classList.add("hidden");
}

function showRegister() {
  document.getElementById("registerBox").classList.remove("hidden");
  document.getElementById("loginBox").classList.add("hidden");
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

  window.location.href = "dashboard.html";
}

// 🆕 REGISTRO
async function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;
  const terms = document.getElementById("termsCheck").checked;

  if (password !== confirm)
    return msg("Senhas não coincidem");

  if (!terms)
    return msg("Aceite os termos");

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) return msg("Erro ao criar conta");

  msg("Verifique seu email 🚀");
}

// MSG
function msg(text) {
  document.getElementById("msg").innerText = text;
}
