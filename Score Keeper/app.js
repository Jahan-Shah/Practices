const buttonP1 = document.querySelector('#p1Button');
const buttonP2 = document.querySelector('#p2Button');

const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')

const resetScore = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;

buttonP1.addEventListener('click', function(){
    p1Score+=1;
    p1Display.textContent = p1Score;
})

buttonP2.addEventListener('click', function(){
    p2Score+=1;
    p2Display.textContent = p2Score;
})