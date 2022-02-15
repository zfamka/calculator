const numbers = document.querySelectorAll('.numbers');
let out = document.querySelector('.output');
const equals = document.querySelector('.equals');

numbers.forEach(elem => {
  elem.addEventListener('click', () => {
    out.innerHTML += elem.innerHTML;
  })
});

equals.addEventListener('click', () => {
  out.innerHTML = eval(out.innerHTML)
})