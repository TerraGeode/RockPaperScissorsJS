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
    c = Math.floor(Math.random()*3);
    return choices[c];
}
//compare choices
//track winner

console.log(computerChoose());