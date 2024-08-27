choices = ["Rock", "Paper", "Scissors"]
//get human choice
let playerChoose = () => {
    choice = parseInt(prompt("Rock (1), Paper(2), Scissors(3)!"));
    return choice;
}
//get computer choice
//compare choices
//track winner

hChoice = playerChoose();
console.log(choices[hChoice-1]);