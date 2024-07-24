 userScore = 0;
 computerScore = 0;

const choices = document.querySelectorAll(".choice");//get the access of all items.
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
//let yChoice = document.querySeoulector("#you");
//let cChoice = document.querySeoulector("#comp");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];//string.
    const randomNumber = Math.floor(Math.random() * 3); //generate random numbers from 0 to 2.
    return options[randomNumber];//random number will treat as an index number for string.
 };

choices.forEach((choice) => { //run all three choices.
    choice.addEventListener("click", () => { //when button gets clicked.
        const userChoice = choice.getAttribute("id");//get the "Id".
        playGame(userChoice);//call playGame & pass user choice.
    });
});

const playGame = (userChoice) => {
 console.log("user has choosen", userChoice);
 //yChoice.innerText = userChoice();
 const compChoice = genCompChoice();//returned number from "genCopmChoice()".
 //cChoice.innerText = compChoice;
 console.log("Computer Has Choosen",compChoice);
 if(userChoice === compChoice){
    drawGame();
 }else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper"? false : true;
 }else if(userChoice === "paper"){
        userWin = compChoice === "scissor"? false : true;
 }else{
        userWin = compChoice === "rock"? false : true;
 }
 showWinner(userWin);
}
};

const drawGame = () => {
    console.log("Draw Was Game");
    msg.innerText = "The Game Was Draw";
    msg.style.backgroundColor = "Black";
};

showWinner = (userWin) => {
if(userWin){ //if user win = true.
    console.log("User Has Won The Game");
    msg.innerText = "You Won The Game";
    msg.style.backgroundColor = "Blue";
    userScore ++;
    console.log(userScore);
    user.innerText = userScore;
}else{
    console.log("You Lost The Game")
    msg.innerText = "You Lost The Game";
    msg.style.backgroundColor = "Red";
    computerScore ++;
    console.log(computerScore);
    comp.innerText = computerScore;
}
};





