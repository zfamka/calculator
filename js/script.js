const numbers = document.querySelectorAll('.numbers');
const signs = document.querySelectorAll('.signs');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
let out = document.querySelector('.output');

let outCount = '';

numbers.forEach(elem => {
  elem.addEventListener('click', () => {
    out.innerHTML += elem.innerHTML;
    outCount = out.innerHTML
  })
});

signs.forEach(elem => {
  elem.addEventListener('click', () => {
    out.innerHTML += `${elem.innerHTML}`;
  })
});

equals.addEventListener('click', () => {
  if (out.innerHTML == '') {
    out.innerHTML = ''
  } else {
    out.innerHTML = eval(out.innerHTML);
    outCount = out.innerHTML;
  }
});

clear.addEventListener('click', () => {
  out.innerHTML = '';
});

backspace.addEventListener('click', () => {
  outCount = outCount.slice(0, -1);
  out.innerHTML = outCount;

});