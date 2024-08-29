let usercore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

const drawGame = () => {
   
    msg.innerHTML = "Draw Game Play Again...";
    msg.style.backgroundColor ="#081b31";
}


const showWinner = (userWin,userChoice,compChoice) => {
   if(userWin){
    usercore++;
    userChoicePara.innerText = usercore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
   
   }
   else{
   compscore++;
   compChoicePara.innerText = compscore;
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor ="red";
   }
}

const playGame = (userChoice) =>{
  
    const compChoice = genCompChoice();
  

    if(compChoice === userChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock" && compChoice === "paper"){
            userWin = false;
        }
        if(userChoice === "rock" && compChoice === "scissors"){
           userWin = true;
        }
        if(userChoice === "paper" && compChoice === "rock"){
           userWin = true;
        } 
        if(userChoice === "paper" && compChoice === "scissors"){
            userWin = false;
        }
        if(userChoice === "scissors" && compChoice === "rock"){
            userWin = false;
        }
        if(userChoice === "scissors" && compChoice === "paper"){
            userWin = true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
}


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

choices.forEach((choice) => {
   
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
    
})