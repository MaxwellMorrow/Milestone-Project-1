// Selectors
const playerDiv = document.querySelector("#player")
const startBtn = document.querySelector("#start")
const startDiv = document.querySelector(".start-message")
const winDiv = document.querySelector(".win-display")
const timeDisplay = document.querySelector(".time-display")
const enemy1Div = document.querySelector("#enemy1")
const enemy2Div = document.querySelector("#enemy2")
const enemy3Div = document.querySelector("#enemy3")
const winMessage = document.querySelector("#win-message")
const restartBtn = document.querySelector("#restart")

// time variables 
let startTime
let endTime
let elapsedTime


// helper functions 
function getEndTime(){
    endTime = new Date()
    elapsedTime = (endTime - startTime) / 1000
    elapsedTimeStorage.push(elapsedTime)
    console.log(elapsedTimeStorage)
}
function startGame(){
    startTime = new Date();
    // hides the start screen after the button is clicked
    startDiv.classList.remove("show")
}
function showWin(){
    winMessage.innerHTML = `You win! Your time ${elapsedTime} seconds!`
    winDiv.classList.add("show")
}
function displayTimes(){
    timeDisplay.innerHTML = "Time Display"  // removes any times currently being displayed 
    elapsedTimeStorage.forEach(time => {
    let timeli = document.createElement("li")
    timeli.textContent = `${time}`
    timeDisplay.append(timeli)
})}
function resetPlayer(){
    playerData = {x: 10,y: 1}// reset the player data
    playerDiv.style.top = playerData.y *50 - 50 + "px"; // reset the player div position
    playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px" ;
}


    // Event listeners
    window.addEventListener("keypress",(e)=>{

        let checkMoveRight = wallsData.some(wall =>  wall.x === playerData.x + 1  && wall.y === playerData.y)
        let checkMoveLeft = wallsData.some(wall => wall.x === playerData.x - 1 && wall.y === playerData.y)
        let checkMoveDown = wallsData.some(wall => wall.x === playerData.x && wall.y === playerData.y + 1)
        let checkMoveUp = wallsData.some(wall => wall.x === playerData.x && wall.y === playerData.y - 1)
        let checkTreasure = treasureData.some(treasure => treasure.x === playerData.x && treasure.y === playerData.y)
        let gameStarted = !startDiv.classList.contains("show")
        let gameRestarted = !winDiv.classList.contains("show")
        let checkLose = enemiesData.some(enemy => enemy.x === playerData.x && enemy.y === playerData.y)

        // Simple if statements for our keypresses this can definitly be refactored 
        if(e.key === "s" && checkMoveDown === false && gameStarted && gameRestarted){
            playerData.y += 1 
            playerDiv.style.top = playerData.y *50 - 50 + "px";
            if(checkLose === true){
                resetPlayer()
            }
        }
        if(e.key === "w" && checkMoveUp === false && gameStarted && gameRestarted){
             playerData.y -= 1 
             playerDiv.style.top = playerData.y * 50 - 50 + "px";
             if(checkLose === true){
                resetPlayer()
            }
            }
        if(e.key === "d" && checkMoveRight === false && gameStarted && gameRestarted){
            playerData.x += 1 
            playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px" ;// I had to subtract 9 from the initial player data because the player starts on x = 10 but the playerDiv's movement is relative to its original position
            if(checkLose === true){
                resetPlayer()
            }
            }
        if(e.key === "a" && checkMoveLeft === false && gameStarted && gameRestarted){
            playerData.x -= 1 
            playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px";
            if(checkLose === true){
                resetPlayer()
            }
            }

        if(checkTreasure === true){
            getEndTime()
            resetPlayer()
            showWin()
            displayTimes()
        }
    })

  
    // Start event listener also gets our start time and pushes the time to our timeStorage array 
    startBtn.addEventListener("click", ()=>{
        startGame()
        // want to connect enemy move functions to start but still working on it
    })

    restartBtn.addEventListener("click",()=>{
        winDiv.classList.remove("show")// hide our win message div by removing its class of show 
        startDiv.classList.add("show")// show our start button again using the class of show
    })


    // On load 
    moveEnemy1()
    setInterval(moveEnemy1,(enemy1Speed * 10))
    moveEnemy2()
    setInterval(moveEnemy2,(enemy2Speed * 10))
    moveEnemy3()
    setInterval(moveEnemy3,(enemy3Speed * 10))
    displayTimes()

    




