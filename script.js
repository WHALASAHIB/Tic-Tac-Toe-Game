let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// 1. different colors for X and O
// 2. Draw function has to implemented when count reach 9 and no winner was declared
//3. Practise leet code question from the apna college in javascript.

let turnO = true;

//all of listed patterns for winning this game
const winPatterns = [
    [0,1,2],
    [0,3,4],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//Reset the game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach ((box) => {
    box.addEventListener("click",() => {
        if (turnO) {
            box.innerText = `O`;
            box.style.color = "blue";
            turnO = false;
        }else {
            box.innerText = `X`;
            box.style.color =  "rgb(172, 45, 43)";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showDraw = () => {
    msg.innerText = "Game Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    let isDraw = true;
    
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }
    
    // Check for draw
    for(let box of boxes) {
        if(box.innerText === "") {
            isDraw = false;
            break;
        }
    }
    
    if(isDraw) {
        showDraw();
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


