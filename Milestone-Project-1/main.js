// Selectors
const playerDiv = document.querySelector("#player")
const startBtn = document.querySelector("#start")
const startDiv = document.querySelector(".start-message")
const winDiv = document.querySelector(".win-message")
const timeDisplay = document.querySelector(".time-display")
const enemy1Div = document.querySelector("#enemy1")
const enemy2Div = document.querySelector("#enemy2")
const enemy3Div = document.querySelector("#enemy3")

// helper functions 


    // Event listeners
    window.addEventListener("keypress",(e)=>{

        let checkMoveRight = wallsData.some(element =>  element.x === playerData.x + 1  && element.y === playerData.y)
        let checkMoveLeft = wallsData.some(element => element.x === playerData.x - 1 && element.y === playerData.y)
        let checkMoveDown = wallsData.some(element => element.x === playerData.x && element.y === playerData.y + 1)
        let checkMoveUp = wallsData.some(element => element.x === playerData.x && element.y === playerData.y - 1)
        let checkTreasure = treasureData.some(element => element.x === playerData.x && element.y === playerData.y)
        let gameStarted = !startDiv.classList.contains("show")
        

        // Simple if statements for our keypresses this can definitly be refactored 
        if(e.key === "s" && checkMoveDown === false && gameStarted){
            playerData.y += 1 
            playerDiv.style.top = playerData.y *50 - 50 + "px";
        }
        if(e.key === "w" && checkMoveUp === false && gameStarted){
             playerData.y -= 1 
             playerDiv.style.top = playerData.y * 50 - 50 + "px";
            }
        if(e.key === "d" && checkMoveRight === false && gameStarted){
            playerData.x += 1 
            playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px" ;// I had to subtract 9 from the initial player data because the player starts on x = 10 but the playerDiv's movement is relative to its original position
            }
        if(e.key === "a" && checkMoveLeft === false && gameStarted){
            playerData.x -= 1 
            playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px";
            }

        if(checkTreasure === true){
            let endTime = new Date()
            let elapsedTime = endTime - startTime
            elapsedTimeStorage.push(elapsedTime)
            localStorage.setItem("time",`${elapsedTimeStorage}`)
            elapsedTimeStorage = []
    
            // Here after we win the game we want to display our win message by changing its class but first we put in the content 
            winDiv.innerHTML = `You win! Your time ${elapsedTime / 1000} seconds!
            <button id="restart">Restart</button>`
            winDiv.classList.add("show")

            // I could only get this event listener to work inside the function I think this is because of my adjustment of the innerHTML and needing to reselect the button
            let restartBtn = document.querySelector("#restart")
            restartBtn.addEventListener("click",()=>{
                // this clears out our time storage array so it can track another time 
                timeStorage = []
                // hide our win message div by removing its class of show 
                winDiv.classList.remove("show")
                // show our start button again using the class of show
                startDiv.classList.add("show")
                // reset the player data to its start position
                playerData = {x: 10,y: 1}
                // reset the player div position to the start position by referencing  player Data 
                playerDiv.style.top = playerData.y *50 - 50 + "px";
                playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px" ;
                

                // placing a call to local storage in the reset button hoping to get our times to display properly
                localElapsedTimeStorage.push(parseInt(localStorage.getItem("time")))
                console.log(localElapsedTimeStorage)

                let localElapsedSeconds = localElapsedTimeStorage.map( x => x / 1000)

                console.log(localElapsedSeconds)
                // including this line to remove any previous times that are being displayed 
                timeDisplay.innerHTML = "Time Display"
                // for each of our seconds array we are creating an li to display that time 
                localElapsedSeconds.forEach(time => {
                    let timeli = document.createElement("li")
                    timeli.textContent = `${time}`
                    timeDisplay.append(timeli)
                })
            })
        }
    })

  
    // Start event listener also gets our start time and pushes the time to our timeStorage array 
    startBtn.addEventListener("click",()=>{
        let startTime = new Date();
        // hides the start screen after the button is clicked
        startDiv.classList.remove("show")
        timeStorage.push(startTime)
        
    })


moveEnemy1()



