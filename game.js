let hands = ["rock", "paper", "scissors"];
let hScore = 0;
let cScore = 0;

const pGameWinner = document.getElementById("winner");
const pScore = document.getElementById("score");
const pVictor = document.getElementById("victor");

//get computer choice
let computerChoose = () => {
    c = Math.floor(Math.random()*3);
    return hands[c];
}
//compare choices
let winningHand = (cHand, hHand) => {
    if (cHand == hHand) {
        return "tie";
    } else if (
        (cHand == hands[0] && hHand == hands[2]) || 
        (cHand == hands[1] && hHand == hands[0]) ||
        (cHand == hands[2] && hHand == hands[1])
    ) {
        cScore++;
        return "computer"
    } else {
        hScore++;
        return "player";
    }
}

//play game
let game = (pChoice) => {
    let compChoice = computerChoose();
    let winner = winningHand(compChoice,pChoice);
    
    console.log(`Computer: ${compChoice}`);
    console.log(`Player: ${pChoice}`);
    console.log(winner);
    return winner;
}

let boardUpdate = (win) => {
    pGameWinner.textContent = `Winner: ${win}`;
    pScore.textContent = `Player: ${hScore} Computer: ${cScore}`;
    if (hScore == 5 || cScore == 5) {
        if (hScore == 5) {
            pVictor.textContent = `Player wins!`;
        } else {
            pVictor.textContent = `Computer wins!`;
        }
    }
}

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

btnRock.addEventListener("click", () => {
    let w = game("rock");
    boardUpdate(w);
});
btnPaper.addEventListener("click", () => {
    let w = game("paper");
    boardUpdate(w);
});
btnScissors.addEventListener("click", () => {
    let w = game("scissors");
    boardUpdate(w);
});