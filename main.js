const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'lightred', 'lightgreen', '#3b5992', 'brown', 'lightblue'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}