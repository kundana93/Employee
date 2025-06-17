let registeredUser = {};

function showPage(page) {
  document.getElementById('home').classList.add('hidden');
  document.getElementById('signupPage').classList.add('hidden');
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('welcomePage').classList.add('hidden');

  if (page === 'signup') {
    document.getElementById('signupPage').classList.remove('hidden');
  } else if (page === 'login') {
    document.getElementById('loginPage').classList.remove('hidden');
  } else if (page === 'welcome') {
    document.getElementById('welcomePage').classList.remove('hidden');
  }
}

function submitSignup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirm').value;

  if (!name || !email || !password || !confirm) {
    alert("Please fill all fields.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  registeredUser = { name, email, password };
  alert("You have successfully registered");
  showPage('login');
}

function submitLogin() {
  const name = document.getElementById('loginName').value;
  const password = document.getElementById('loginPassword').value;

  if (name === registeredUser.name && password === registeredUser.password) {
    document.getElementById('welcomeMessage').innerText = `Welcome, ${name}!`;
    showPage('welcome');
  } else {
    alert("Invalid credentials");
  }
}