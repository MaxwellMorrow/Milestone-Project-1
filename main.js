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
const toggleWall = document.querySelector(".toggle-wall")
const wallToggle = document.querySelector(".wall-toggle")

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
    startDiv.classList.remove("show") // hides the start screen
}
function showWin(){
    winMessage.innerHTML = `You win! Your time ${elapsedTime} seconds!`
    winDiv.classList.add("show")
}
function displayTimes(){
    timeDisplay.innerHTML = "Time Display"  // removes any times currently being displayed 
    elapsedTimeStorage.forEach(time => { // displays every time we have in our elaspedTimeStorage array as a new Li
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
        // collosion checks and game start checks. Would like to figure out how to get these to work outside our event listener
        let checkMoveRight = wallsData.some(wall =>  wall.x === playerData.x + 1  && wall.y === playerData.y)
        let checkMoveLeft = wallsData.some(wall => wall.x === playerData.x - 1 && wall.y === playerData.y)
        let checkMoveDown = wallsData.some(wall => wall.x === playerData.x && wall.y === playerData.y + 1)
        let checkMoveUp = wallsData.some(wall => wall.x === playerData.x && wall.y === playerData.y - 1)
        let checkTreasure = treasureData.some(treasure => treasure.x === playerData.x && treasure.y === playerData.y)
        let checkWallToggle = wallToggleData.some(wallToggle => wallToggle.x === playerData.x && wallToggle.y === playerData.y)
        let gameStarted = !startDiv.classList.contains("show")
        let gameRestarted = !winDiv.classList.contains("show")
        let checkEnemyCollision = enemiesData.some(enemy => enemy.x === playerData.x && enemy.y === playerData.y)

        // Simple if statements for our keypresses this can definitly be refactored 
        if(e.key === "s" && checkMoveDown === false && gameStarted && gameRestarted){
            playerData.y += 1 
            playerDiv.style.top = playerData.y *50 - 50 + "px";
            if(checkEnemyCollision === true){
                resetPlayer()
            }
        }
        if(e.key === "w" && checkMoveUp === false && gameStarted && gameRestarted){
             playerData.y -= 1 
             playerDiv.style.top = playerData.y * 50 - 50 + "px";
             if(checkEnemyCollision === true){
                resetPlayer()
            }
            }
        if(e.key === "d" && checkMoveRight === false && gameStarted && gameRestarted){
            playerData.x += 1 
            playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px" ;// subtract 9 from the initial player data because the player starts on x = 10 but the playerDiv's movement is relative to its original position
            if(checkEnemyCollision === true){
                resetPlayer()
            }
            }
        if(e.key === "a" && checkMoveLeft === false && gameStarted && gameRestarted){
            playerData.x -= 1 
            playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px";
            if(checkEnemyCollision === true){
                resetPlayer()
            }
            }
        
        if(checkWallToggle === true && wallsData.length === 149){
            wallsData.pop()// removes the last two objects from our wallsData array allowing the player to move through the toggle wall 
            wallsData.pop()
            toggleWall.classList.add("hide")
            wallToggle.classList.add("hide")
        }
        if(checkTreasure === true){
            getEndTime()
            resetPlayer()
            showWin()
            displayTimes()
            wallsData.push(toggleWallData[0])// pushes our toggle wall data back into wall data to prevent the player from going through it
            wallsData.push(toggleWallData[1])
            toggleWall.classList.remove("hide")
            wallToggle.classList.remove("hide")
        }
    })

  
    // Start event listener also gets our start time and pushes the time to our timeStorage array 
    startBtn.addEventListener("click", ()=>{
        startGame()
    })

    restartBtn.addEventListener("click",()=>{
        winDiv.classList.remove("show")// hide our win message div by removing its class of show 
        startDiv.classList.add("show")// show our start button again using the class of show
    })


    // On load 
    
    moveEnemy1() // we call all the move functions first and then have them loop afterward using setinterval
    setInterval(moveEnemy1,(enemy1Speed * 10)) // we move the enemy 10 times so multiplying the speed of those moves by 10 gives us a perfect loop 
    moveEnemy2()
    setInterval(moveEnemy2,(enemy2Speed * 10))
    moveEnemy3()
    setInterval(moveEnemy3,(enemy3Speed * 10))
    displayTimes()

    




