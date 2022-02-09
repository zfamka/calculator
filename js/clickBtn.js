const numbers = document.querySelectorAll('.numbers');
const output = document.querySelector('.output');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');

numbers.forEach((elem) => {
    elem.addEventListener('click', () => {
        output.innerHTML += elem.innerHTML;
    })
})

plus.addEventListener('click', () => {
})

equals.addEventListener('click', () => {

})
