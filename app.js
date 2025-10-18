let choices= document.querySelectorAll(".choice");
let compscore=document.querySelector("#compscore");
let userscore=document.querySelector("#userscore");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let user_score=0;
let comp_score=0;

function compchoice(){
    let arr=["rock","paper","scissor"]
    rand =Math.floor(Math.random()*3)
    return arr[rand]
}
 
function drawcond(a,b){
    if(a===b)
    {
        console.log("draww")
        msg.innerText="match is draw";
        msg.style.backgroundColor="yellow"
        msg.style.color="black";
    
        return true;
    }
    else{
        return false;
    }
}

function win(comp,user){
    if (comp==="rock" && user==="paper"){
        console.log("user is winner")
        user_score++
        userscore.innerText=user_score;
    

        msg.innerText="you won!, paper beats rock";
        msg.style.backgroundColor="green";

    }
    else if(comp==="paper" && user==="scissor"){
        console.log("user is winner")
        user_score++
        userscore.innerText=user_score;
         msg.innerText="you won!, scissor beats paper";
         msg.style.backgroundColor="green";
    }
    else if(comp==="scissor" && user==="rock"){
        console.log("user is winner")
        user_score++
        userscore.innerText=user_score;
         msg.innerText="you won!, rock beats scissor";
         msg.style.backgroundColor="green";
    }

    else{
        console.log("computer is winner");
        comp_score++
        compscore.innerText=comp_score;
         msg.innerText="computer wins";
         msg.style.backgroundColor="red";
    
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        console.log("your choice is",userchoice)
        
        randomchoice=compchoice(); 
        console.log("computer choice is",randomchoice);
        
          const isdraw=drawcond(randomchoice,userchoice);
          
          if(!isdraw){
          win(randomchoice,userchoice);}
    
    })
});
