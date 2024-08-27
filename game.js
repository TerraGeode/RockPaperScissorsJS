let hands = ["rock", "paper", "scissors"]
//get human choice
let playerChoose = () => {
    let choice = prompt("rock, paper, scissors!");
    choice = choice.toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = playerChoose();
    }
    return choice;
}
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
        return "computer"
    } else {
        return "player";
    }
}

//play game
let game = () => {
    let pChoice = playerChoose();
    let compChoice = computerChoose();
    let winner = winningHand(compChoice,pChoice);
    
    console.log(`Computer: ${compChoice}`);
    console.log(`Player: ${pChoice}`);
    console.log(winner);
    return winner;
}