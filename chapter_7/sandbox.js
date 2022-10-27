const form = document.querySelector('.signup-form');
const tdList = document.querySelector('.tdList');

tdList.addEventListener('click', event => {
  
});

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log('form submitted');
  // console.log(username.value);
  console.log(form.username.value);
});