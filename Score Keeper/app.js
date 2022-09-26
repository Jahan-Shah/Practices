const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetScore = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#toWin');

let winningScore = 3;

function pingpongScore(player, opponent){
        player.score+=1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }

function winByTwo(player, opponent){
    if(player.score === opponent.score && player.score === winningScore-1){
        winningScore++;
        winningScoreSelect.classList.add('overtime');
        winningScoreSelect.selectedOptions[0].value === winningScore;
        winningScoreSelect.selectedOptions[0].innerText = `Tie BREAK to ${winningScore}`;
    }
}

p1.button.addEventListener('click', function(){
    pingpongScore(p1, p2)
    winByTwo(p1, p2)
})

p2.button.addEventListener('click', function(){
    pingpongScore(p2, p1)
    winByTwo(p2, p1)
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetScore.addEventListener('click', reset)

function reset(){
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = '0';
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    for(let i=0; i<5; i++){
            winningScoreSelect[i].value = i+3+i;
            winningScoreSelect[i].innerText = i+3+i;
    }
    winningScore = parseInt(winningScoreSelect.value);
    winningScoreSelect.classList.remove('overtime');
}