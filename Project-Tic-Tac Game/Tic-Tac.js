let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#Reset-btn");
let newButton = document.querySelector("#new-btn");
let newButton1 = document.querySelector("#new-btn1");
let msgBox = document.querySelector(".msg-div");
let msgBox1 = document.querySelector(".msg-div1");
let msg = document.querySelector("#msg");
let msg1 = document.querySelector("#msg1");
let count = 0;
let turnO = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetgame = () => {
    turnO = true;
    enabledBoxes();
    msgBox.classList.add("hide");
}
const resetgame1 = () => {
    turnO = true;
    enabledBoxes();
    msgBox1.classList.add("hide");
}

boxes.forEach((Box) => {
    Box.addEventListener("click",() => {
      
         if(turnO) {
            Box.innerText = "O";
            Box.style.color = "#b0413e";
            turnO = false;
            count++;
         }
         else{
            Box.innerText = "X";
            Box.style.color ="#081b31";
            turnO = true;
          count++;
         }
         Box.disabled = true;
         checkWinners();
        if(count === 9){
            showDraw();
        }
    });
});

const showDraw = () => {
    msg1.innerText = "OOPS, Game is Draw";
    msgBox1.classList.remove("hide");
    disablegBoxes();
    count = 0;
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgBox.classList.remove("hide");
    disablegBoxes();
    count = 0;
}

const disablegBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const checkWinners = () => {
    for(let pattern of winpatterns) {
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;

        if(post1val != "" && post2val != "" && post3val !=""){
            if(post1val === post2val && post3val === post2val){
                
                showWinner(post1val);
            }
            
        }
    }
}

newButton.addEventListener("click", resetgame);
resetButton.addEventListener("click",resetgame);
newButton1.addEventListener("click",resetgame1);