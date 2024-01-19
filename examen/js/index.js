const inputLogin = document.getElementsByName('login')[0];
const inputPassword = document.getElementsByName('password')[0];

const formLogin = document.forms[0];
formLogin.addEventListener('submit', e => {
  if (inputLogin.value && inputPassword.value) {
    localStorage.login = inputLogin.value;
    sessionStorage.password = inputPassword.value;
    inputLogin.remove();
    inputPassword.remove();
  } else {
    console.log("ERROR: Los campos 'login' y 'password' deben estar completos.");
    e.preventDefault();
  }
});

function loadData() {
  inputLogin.value = localStorage.login ?? '';
  inputPassword.value = sessionStorage.password ?? '';
  if (inputLogin.value && inputPassword.value) {
    document.getElementById('panel_password').classList.remove('oculto');
  }
}

loadData();

document.querySelector('[type="reset"]').addEventListener('click', e => {
  localStorage.removeItem('login');
  sessionStorage.removeItem('password');
  document.getElementById('panel_password').classList.add('oculto');
}); 

document.getElementById('cambiar_password').addEventListener('click', async (e) => {
  const login = inputLogin.value;
  const oldPassword = inputPassword.value;
  const newPassword = document.getElementsByName('nueva')[0].value;
  console.log(login, oldPassword, newPassword);
  let url = "http://localhost:3000/api/usuario/" + login;
  let passwords = {
    "old": oldPassword,
    "new": newPassword
  }

  let options  = {
    method: "PUT",
    header: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(passwords)
  }
  
  let response = await fetch(url, options);
  let json = await response.json();
  console.log(json); 
  
  

});