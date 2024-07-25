let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomnumber=Math.ceil(Math.random() *100);
function checkGuess() {
    let guessednumber=parseInt(userInput.value);
    if(guessednumber>randomnumber){
        gameResult.textContent="Too High! Try Again.";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if(guessednumber<randomnumber){
        gameResult.textContent="Too Low! Try Again."
        gameResult.style.backgroundColor="#1e217c";
    }
    else if(guessednumber===randomnumber){
        gameResult.textContent="Congratulations you guessed right";
        gameResult.style.backgroundColor="green";
    }
    else{
        gameResult.textContent="Please Provide a Valid Input.";
        gameResult.style.backgroundColor="#1e217c";
    }
    
}