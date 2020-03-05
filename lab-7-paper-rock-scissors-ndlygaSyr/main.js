//Element nodes
const buttons = document.getElementsByClassName("btn-choice");
console.log(buttons);


//Event Listeners
for (var i = 0 ; i < buttons.length ; i++) {
    const btn = buttons[i];
    console.log(btn);
    btn.addEventListener("click", function(evt) {
        const clickBtn = evt.target || evt.currentTarget;
        const playerChoice =  clickBtn.dataset.option;
        playRound(playerChoice);
    });
}




//Variables for the game
const choices = ["Paper", "Rock", "Scissors"]
let playerScore = 0;
let computerScore = 0;
const winningScore = 10;



//Play a round of Rock, Paper, Scissors
function playRound(plrChoice) {
    let randInx = Math.floor(Math.random() * (choices.length))
    const computerChoice = choices[randInx];

    if (plrChoice === computerChoice) {
        console.log("Tie");
    }
    console.log("Something else");
 
}


//Update the text between the scores with the result of the round and with what each player played
function resultText() {
    
}


//Reset scores and text elements to 0
function resetGame() {
    
}


//Alert the player whether they won or not after someone reaches 10 points
function gameOver() {
    
}