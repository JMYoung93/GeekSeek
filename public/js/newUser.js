const submitBtn = document.querySelector("#submit_btn");

const submitFormHandler = async (event) => {
  event.preventDefault();
  
  
  let first_name = document.querySelector('#first-name').value.trim()
  let last_name = document.querySelector('#last-name').value.trim()
  let email = document.querySelector('#email').value.trim()
  let password = document.querySelector('#password').value.trim()
  let gender = document.querySelector('#gender').value
  let looking_for = document.querySelector('#seeking_gender').value
  let age = document.querySelector('#age').value.trim()
  let ethnicity = document.querySelector('#ethnicity').value
  let education = document.querySelector('#education').value
  let tvShow = document.querySelector('#tvshow').value.trim()
  let movie = document.querySelector('#movie').value.trim()
  let music = document.querySelector('#music').value.trim()
  let book = document.querySelector('#book').value.trim()
  let hobbies = document.querySelector('#hobbies').value.trim()
  let fun = document.querySelector('#fun').value.trim()
  let description = document.querySelector('#geek').value.trim()

  if(!email  || !first_name || !last_name || !password || !age ) return ;
  let children = "Yes"
  let userObj = {
    email ,
    password,
    first_name,
    last_name, 
    gender,
    looking_for,
    age,
    ethnicity,
    education,
    children,
    description
  }

  let questionObj = {
    tvShow,
    movie,
    music,
    book,
    hobbies,
    fun
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