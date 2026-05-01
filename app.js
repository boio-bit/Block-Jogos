const supabaseUrl = "https://hwffqfjimqjrapzesbaa.supabase.co";
const supabaseKey = "sb_publishable_7-r8PC-K_jdJ0wZeTcctzg_-YT9M9wp";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// 🔥 AUTO CHECK AO ABRIR
(async () => {
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    document.getElementById("msg").innerText = "Já logado!";
  }
})();

// 🔐 LOGIN
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

  document.getElementById("msg").innerText = "Login OK! 🚀";

  // salva sessão
  localStorage.setItem("user", JSON.stringify(data.user));

  // redireciona (simulação dashboard)
  setTimeout(() => {
    document.body.innerHTML = `
      <h1 style="color:white;text-align:center;margin-top:100px;">
        Bem-vindo ao Block Jogos 🚀
      </h1>
    `;
  }, 800);
}

// ⚡ ENTRAR DIRETO
async function autoLogin() {
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    document.body.innerHTML = `
      <h1 style="color:white;text-align:center;margin-top:100px;">
        Login automático OK 🚀
      </h1>
    `;
  } else {
    document.getElementById("msg").innerText = "Sem sessão ativa";
  }
}
