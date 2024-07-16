
let boxes = document.querySelectorAll(".box");//get access on the box.
let reset = document.querySelector("reset");//get access on reset.
let turn = true;//This is the turn of player"O".

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

boxes.forEach((box) => { //For each box.
box.addEventListener("click",() => { //Wheneve a box get clicked.
  //console.log("BOX CLICKED");
  if(turn === true){ //turn of player "X".
    box.innerText = "X";
    turn = false;//
  }
  else{ //turn of player "O".
    box.innerText = "O";
    turn = true;
  }
  box.disabled = true;//Disable the button which has pressed onece.
  checkWinner();
});
});

const checkWinner = () =>{ //move the result in "checkWinner".
  for(let pattern of winPattern){ //print all the values of winPattern one by one. 
      let position1 = boxes[pattern[0]].innerText; //position 1.
      let position2 = boxes[pattern[1]].innerText; //position 1.
      let position3 = boxes[pattern[2]].innerText; //position 1.

      if(position1 != "" && position2 != "" && position3 != ""){
        if(position1 === position2 && position2 === position3){
          console.log("The Winner Is",position1);
        }
      }
  }
}











