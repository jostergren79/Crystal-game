
// variables
var crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    }
  };

const RandomNumbers = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
let randomnumberdiv = document.getElementById("RandomNumber")
let winsdiv = document.getElementById("wins")
let lossesdiv = document.getElementById("losses")
let scoreDiv = document.getElementById("score")
let sumOfCrystals = 0;


let RandomChoice = RandomNumbers[Math.floor(Math.random()*RandomNumbers.length)]; 
console.log(RandomChoice);


function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function startGame(){
    sumOfCrystals = 0;
    crystal.blue.value = getRandom(1,12)
    randomnumberdiv.textContent = "Random Number: " + RandomChoice;
    scoreDiv.textContent = "Score: " + sumOfCrystals;
}

function checkScore(){
    console.log(sumOfCrystals)
    if (sumOfCrystals > RandomChoice) {
    // this is a loss, ++loss
    } else if (sumOfCrystals === RandomChoice){
    //increment wins, call start game
    }
}









function addValues(clickCrystal){
    console.log(clickCrystal, sumOfCrystals)
    sumOfCrystals += clickCrystal.value;
    scoreDiv.textContent = "Score: " + sumOfCrystals;
    checkScore();
}


$("#crystalimage1").on("click", function(){
    console.log("working") 

    addValues(crystal.blue)
})

startGame()



// create an onclick event that addes the value of the crystal clicked to the score



// create a function that compares score with RandomNumber


// create a reset 