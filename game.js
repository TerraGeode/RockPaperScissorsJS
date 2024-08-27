choices = ["Rock", "Paper", "Scissors"]
//get human choice
let playerChoose = () => {
    choice = parseInt(prompt("Rock (1), Paper(2), Scissors(3)!"));
    return choice -1;
}
//get computer choice
let computerChoose = () => {
    return Math.floor(Math.random()*3);
}
//compare choices
//track winner

cChoice = computerChoose();
console.log(choices[cChoice]);