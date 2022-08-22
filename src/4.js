'use strict'
const wrapper = document.querySelector('.wrapper');

const colors = ['#ba3f16','#ba6816','#ba9116','#bab716','#9cba16','#79ba16','#27ba16','#16ba66','#16ba9c',
  '#169fba','#166eba','#1637ba','#7e16ba','#b216ba','#ba1658','#ba162c'];

if (wrapper) {
  wrapper.addEventListener('click', (event) => {
    const item = event.target;
    item.style.backgroundColor = colors[parseInt(Math.random()*colors.length)];
  
    if (item.innerText) {
      item.innerText++;
    } else {
      item.innerText = 1;
    }
  });
}



