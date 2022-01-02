const submitBtn = document.querySelector("#submit_btn");

const submitFormHandler = async (event) => {
  event.preventDefault();
  
  
  let name = document.querySelector('#name').value.trim()
  let email = document.querySelector('#email').value.trim()
  let username = document.querySelector('#username').value.trim()
  let gender = document.querySelector('#gender').value
  let seekingGender = document.querySelector('#seeking_gender').value
  let tvPref = document.querySelector('#tvpref').value.trim()
  let tvShow = document.querySelector('#tvshow').value.trim()
  let movie = document.querySelector('#movie').value.trim()
  let music = document.querySelector('#music').value.trim()
  let reading = document.querySelector('#reading').value.trim()
  let book = document.querySelector('#book').value.trim()
  let hobbies = document.querySelector('#hobbies').value.trim()
  let fun = document.querySelector('#fun').value.trim()
  let geek = document.querySelector('#geek').value.trim()

  if(!email  || !username || !name ) return ;

  let userObj = { 
    email ,
    name , 
    username,
    gender,
    seekingGender,
    tvPref,
    tvShow,
    movie,
    music,
    reading,
    book,
    hobbies,
    fun,
    geek
  }
  
  // console.log(userObj)

  fetch('/api/users/newuser',{
    method:'POST',
    body: JSON.stringify(userObj),
    headers: { 'Content-Type': 'application/json' },
  }).then((res)=>res.json())
  .then((data)=>{
    document.location.replace('/main');
  })

//   form[0].value = ""
//   form[1].value = ""
//   form[2].value = ""

};

submitBtn.addEventListener("click", submitFormHandler)