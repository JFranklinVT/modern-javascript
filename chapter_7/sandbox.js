const form = document.querySelector('.signup-form');
const tdList = document.querySelector('.tdList');

tdList.addEventListener('click', event => {
  console.log(event)
  if(event.target.tagName === 'LI'){
    event.target.remove();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log('form submitted');
  // console.log(username.value);
  console.log(form.username.value);
  const listItem = document.createElement('li');
  listItem.textContent = form.username.value;
  tdList.appendChild(listItem);
  form.username.value = '';
});