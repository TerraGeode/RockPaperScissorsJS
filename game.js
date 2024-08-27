choices = ["rock", "paper", "scissors"]
//get human choice
let playerChoose = () => {
    choise = prompt("rock, paper, scissors!");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        choice = playerChoose();
    }
}
//get computer choice
let computerChoose = () => {
    return Math.floor(Math.random()*3);
}
//compare choices
//track winner

cChoice = computerChoose();
console.log(choices[cChoice]);