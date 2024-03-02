let userScore = 0;
let compScore = 0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const draw=()=>{
  msg.innerText="Game drawn!Play again!";
  msg.style.backgroundColor="Purple";
}

const showWinnner=(userWin,userChoice,compChoice)=>{
  if(userWin){
   userScore++;
   userScorePara.innerText=userScore;
   msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor="green";
  }
  else{
   compScore++;
   compScorePara.innerText=compScore;
   msg.innerText=`You lose! Your ${userChoice} beaten by ${compChoice}`;
   msg.style.backgroundColor="red";
     }
};
const generateCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];

}

const playGame=(userChoice)=>{

    const compChoice=generateCompChoice();
    
    if(userChoice===compChoice){
       draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice===paper?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinnner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userChoice=choice.getAttribute("id");
     playGame(userChoice);
    });
});

