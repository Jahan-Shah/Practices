let maxNum = prompt("Enter a maximum number for game: ");
if (maxNum.toLowerCase() === 'q'){
    return;
    }
    maxNum = parseInt(maxNum);

while (!maxNum){
    maxNum = prompt("Enter a valid maximum number for game!!: ");

    if (maxNum.toLowerCase() === 'q'){
        return;
    }
    maxNum = parseInt(maxNum);
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = prompt("Enter your guess: ");

while (!guess){
    if (guess.toLowerCase() === 'q'){
        break;
    }
    guess = parseInt(prompt("Enter a valid guess!!: "));
}
let attempt = 1;

while (parseInt(guess) !== targetNum){
    if (guess.toLowerCase() === 'q'){
        break;
    }
    attempt++;
    if (guess > targetNum){
        guess = prompt("Too high, Try again: ");
    } else if (guess < targetNum){
        guess = prompt("Too low, Try again: ");
    } else {
        guess = prompt(`Your guess was ${guess}. Please enter a number value.`);
    }
}
if (guess.toLowerCase() === 'q')
    console.log(`You Quited. The number was ${targetNum}.`);
    else
    console.log(`Congo, you got it. It took you ${attempt} guesses. The number was ${targetNum}.`);