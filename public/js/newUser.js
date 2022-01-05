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
  let favoriteTVShows = document.querySelector('#tvshow').value.trim()
  let favoriteMoviesTypes = document.querySelector('#movie').value.trim()
  let musicTypes = document.querySelector('#music').value.trim()
  let favoriteBooks = document.querySelector('#book').value.trim()
  let Hobbies = document.querySelector('#hobbies').value.trim()
  let ideaOfFun = document.querySelector('#fun').value.trim()
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
    description,
    favoriteTVShows,
    favoriteMoviesTypes,
    musicTypes,
    favoriteBooks,
    Hobbies,
    ideaOfFun
  }
  let user_id = 5
  let questionObj = {
    favoriteTVShows,
    favoriteMoviesTypes,
    musicTypes,
    favoriteBooks,
    Hobbies,
    ideaOfFun,
    user_id
  }
  // console.log(questionObj)
  // fetch('/api/questions/newuser',{
  //   method:'POST',
  //   body: JSON.stringify(questionObj),
  //   headers: { 'Content-Type': 'application/json' },
  // })
  
  fetch('/api/users/newuser',{
    method:'POST',
    body: JSON.stringify(userObj),
    headers: { 'Content-Type': 'application/json' },
  }).then((res)=>res.json())

  // .then(fetch('/api/users/newuser',{
  //   method:'POST',
  //   body: JSON.stringify(userObj),
  //   headers: { 'Content-Type': 'application/json' },
  // }))
  // .then((res)=>res.json())
  .then((data)=>{
    document.location.replace('/main');
  })

//   form[0].value = ""
//   form[1].value = ""
//   form[2].value = ""

};

submitBtn.addEventListener("click", submitFormHandler)