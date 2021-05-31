const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active'); //toggle active class on search
  input.focus();
})
