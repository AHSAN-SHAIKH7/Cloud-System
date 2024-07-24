let boxes = document.querySelectorAll(".box");//get access on the box.
let reset = document.querySelector(".reset");//get access on reset.
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;//This is the turn of player"O".

let count = 0;

const winPattern = [   //2D Array(Array of Array).
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

boxes.forEach((box) => { //For each box(9 boxes are there).
  box.addEventListener("click",() => { //Wheneve a box get clicked.
    if(turn0 === true){ //turn of player "X".
      box.innerText = "X";
      box.style.color = "Green";
      turn0 = false;//make the turn false.
    }
    else{ //turn of player "O".
      box.innerText = "O";
      box.style.color = "Blue";
      turn0 = true;
    }
    box.disabled = true;//Disable the button which has pressed onece.
    checkWinner();
  });
  });

  const checkWinner = () =>{ //move the result in "checkWinner".
    for(let pattern of winPattern){ //check 8 values of winPattern one by one.
        let position1 = boxes[pattern[0]].innerText; //position 1.
        let position2 = boxes[pattern[1]].innerText; //position 2.
        let position3 = boxes[pattern[2]].innerText; //position 3.
        if(position1 != "" && position2 != "" && position3 != ""){ //When all 3 positions are filled with the text.
          if(position1 === position2 && position2 === position3){ //When all 3 positions will have the same text.
            showWinner(position1);//There will be either "x" or "O" in the position1.
            }
    }
   }
  count ++; //increase the count by 1.
  if(count === 9){
      drawGame();//draw the game.
    }
}

const showWinner = (saif) => { //This is a user defined funtion.containt of "position1" will copy in "saif".
  msgContainer.classList.remove("hide");//enable the "msgContainer".
  msg.innerText = `Congratulations, The winner is ${saif}`;//write inside the "msg".
  if(saif === "X"){
    msg.style.color = "Green";
  }  
  if(saif === "O"){
    msg.style.color = "Blue"; 
  }
  count = 0;
};

const drawGame = () => {
  msgContainer.classList.remove("hide");
  msg.innerText = "Game Draw";
  msg.style.color = "Red"; 
}

            //RESET OR RESTART GAME:

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  count = 0;
};

const enableBoxes = () => { //Function to Enable all the buttons.
  for(let box of boxes){
    box.disabled = false;
    box.innerText = ""; //empty all the box.
  }
  };

newGame.addEventListener("click",resetGame);//Click to start the game.
reset.addEventListener("click",resetGame);//Click to reset the game.




















