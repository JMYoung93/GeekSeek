const loginBtn = document.querySelector("#login_button");

const loginFormHandler = async (event) => {
  event.preventDefault();
  
  const email = document.querySelector('.email').value.trim();
  const password = document.querySelector('.password').value.trim();
  console.log(email)
  
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/main');
    } else {
      alert('Failed to log in');
    }
  }
};

loginBtn.addEventListener("click", loginFormHandler)
// document
//   .querySelector('.form')
//   .addEventListener('.button', loginFormHandler);
