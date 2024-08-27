choices = ["rock", "paper", "scissors"]
//get human choice
let playerChoose = () => {
    choice = prompt("rock, paper, scissors!");
    choice = choice.toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = playerChoose();
    }
    return choice;
}
//get computer choice
let computerChoose = () => {
    return Math.floor(Math.random()*3);
}
//compare choices
//track winner

pChoice = playerChoose();
console.log(pChoice);