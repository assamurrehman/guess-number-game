console.log("guess a number 1-10");
//now variable create
let a:number=Math.floor(Math.random()*10)
import inquirer from "inquirer";
while(true){
    let input=await inquirer.prompt(
        {name:"guess",type:"number",
    message:"enter your guess number between 1-10:"}
    )

// provide code
let ans:number=input.guess
if(a==ans)
{console.log("congrats you have guessed the correct number")
break;
}
else{console.log("u have guess the wrong number .....try again")}}