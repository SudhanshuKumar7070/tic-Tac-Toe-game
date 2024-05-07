/***set music** */
let bgMUsic= new Audio("game-bg Sound.mp3")
let startMUsic= new Audio("game-start.mp3")
let overMUsic= new Audio("game-over.mp3")
let tringSound= new Audio("tring sound.mp3");
let woopSound= new Audio("woopSound.mp3");

/***set music*** */

let getBtn=document.querySelectorAll(".buttons")
let getRestBtn=document.querySelector(".resetButton");
let displayResult= document.querySelector(".result-Display")
let getContainer= document.querySelector(".container");
 const winningPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
 let turnX=true;
 /***function for printing winner */
//  let printTurnFor= document.querySelector(".printTurn");
let print=(turnOf)=>{
   
     newGame.classList.remove("hide");
    // printTurnFor.innerHTML=`CONGRTULATIONS !\n THE WINNER IS: ${turnOf}`
    getContainer.before(frontPage);
    displayResult.append(newGame);
 

     frontPage.innerHTML=` Congratulations!  The winner is: ${turnOf} `
    disableButtons();
    overMUsic.play();

}
// adding front page for game and a new game button
let frontPage=document.createElement("div");
frontPage.setAttribute("class","front-page");
let newGame=document.createElement("button");
newGame.setAttribute("class","resetButton");
newGame.setAttribute("id","new-game");
newGame.innerText="NEW GAME";

// function for checking winner

 let checkWinner=()=>{

    for(  pattern of winningPattern){
        let position1= getBtn[pattern[0]].innerText;
        let position2= getBtn[pattern[1]].innerText;
        let position3= getBtn[pattern[2]].innerText;


        if(position1 !=="" &&  position2 !== "" && position3 !=="" ){
            if(position1==position2 && position2== position3){
                
                print(position1);
            }
        }

        
    }
    
 };

// // function for reset button

// let resetGame=()=>{
  
//     getBtn.forEach(( btn)=>{
//         turnX=true;
// btn.innerText="";
// btn.disabled=false;
//     })
// }
// function for disable buttons

    const disableButtons=()=>{
        for(let button of getBtn){
            button.disabled=true;
        }
    };



//  adding eventlistener to each boxes
 getBtn.forEach((button) =>{
    button.addEventListener("click", ()=>{
      
        if(turnX){
            
            button.innerHTML="X";
            let innercontent=button.innerHTML;
            button.style.color="red";
             tringSound.play();
            turnX=false;
 
        }
       else{
        
        button.innerHTML="O";
        let innercontent2=button.innerHTML;
        button.style.color="blue";
        woopSound.play();
            turnX=true;
            
       }
       button.disabled=true;
     checkWinner();
    
     })
     
 });
//  adding eventListner to reset button
 
getRestBtn.addEventListener("click",()=>{

        turnX=true;
       getBtn.forEach((button)=>{
        button.innerHTML=" ";
        button.disabled=false;
    })
    //  printTurnFor.classList.add("hide");
    frontPage.remove();
    startMUsic.play();
       
     })

// event listener for newgame

newGame.addEventListener("click",()=>{
    
    turnX=true;
    getBtn.forEach((button)=>{
     button.innerHTML=" ";
     button.disabled=false;
   
})
frontPage.remove();
startMUsic.play();
newGame.classList.add("hide")
})