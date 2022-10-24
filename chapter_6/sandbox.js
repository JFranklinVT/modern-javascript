const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('alert');
content.classList.remove('warning');

const paras = document.querySelectorAll('p');

paras.forEach(para => {
  if(para.textContent.includes('error')){
    para.classList.add('error');
  } else if(para.textContent.includes('success')) {
    para.classList.add('success');
  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
