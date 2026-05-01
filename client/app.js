const supabaseUrl = "https://hwffqfjimqjrapzesbaa.supabase.co";
const supabaseKey = "SUA_KEY_AQUI";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// ELEMENTOS
const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");
const msgEl = document.getElementById("msg");

// 🔥 TROCA DE TELA SEGURA
function showLogin() {
  loginBox.style.display = "block";
  registerBox.style.display = "none";
  msg("");
}

function showRegister() {
  loginBox.style.display = "none";
  registerBox.style.display = "block";
  msg("");
}

// 🔥 MENSAGEM
function msg(text) {
  msgEl.innerText = text;
}

// =========================
// 🔐 LOGIN PERFEITO
// =========================
async function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    return msg("Preencha todos os campos");
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return msg("Email ou senha incorretos");
  }

  msg("Login realizado com sucesso 🚀");

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 800);
}

// =========================
// 🆕 REGISTRO PERFEITO
// =========================
async function register() {
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;
  const terms = document.getElementById("termsCheck").checked;

  if (!email || !password || !confirm) {
    return msg("Preencha todos os campos");
  }

  if (password.length < 6) {
    return msg("Senha muito fraca (mínimo 6 caracteres)");
  }

  if (password !== confirm) {
    return msg("Senhas não coincidem");
  }

  if (!terms) {
    return msg("Aceite os termos");
  }

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    return msg("Erro ao criar conta");
  }

  msg("Conta criada! Verifique seu email 🚀");

  setTimeout(() => {
    showLogin();
  }, 1200);
}

// =========================
// 🔥 AUTO LOGIN (SE JÁ LOGADO)
// =========================
(async () => {
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    window.location.href = "dashboard.html";
  }
})();
