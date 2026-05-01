const supabaseUrl = "https://hwffqfjimqjrapzesbaa.supabase.co";
const supabaseKey = "sb_publishable_7-r8PC-K_jdJ0wZeTcctzg_-YT9M9wp";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// 🔥 AUTO CHECK LOGIN AO ABRIR SITE
(async () => {
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    window.location.href = "dashboard.html";
  }
})();

// 🔐 LOGIN NORMAL
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    document.getElementById("msg").innerText = "Erro no login";
    return;
  }

  localStorage.setItem("user", JSON.stringify(data.user));

  document.getElementById("msg").innerText = "Login OK!";

  // 🚀 REDIRECIONAMENTO AUTOMÁTICO
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 800);
}

// ⚡ ENTRAR DIRETO (SE JÁ LOGADO)
async function autoLogin() {
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Sem sessão ativa";
  }
}
