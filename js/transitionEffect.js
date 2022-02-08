const main = document.querySelector('.main');
const child = main.children;

setTimeout(() => {
    for(let i = 0; i < child.length; i++) {
        child[i].classList.add('transitionEffect');
    }
  }, 200) 