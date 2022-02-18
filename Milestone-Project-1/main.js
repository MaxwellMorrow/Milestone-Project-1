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


    window.addEventListener("keypress",(e)=>{

        let checkMoveRight = wallsData.some(element => {
            // using .some to check all the values in our wallsData 
            // x + 1 would move us one space right on our data so we need to check if we have placed a wall there 
            // I think this is functioning properly currently returning true because there is a wall to the right of the player
            return element.x === playerData.x + 1  && element.y === playerData.y
            }
        )
        let checkMoveLeft = wallsData.some(element => {
            // using the same check as above but to the left
            return element.x === playerData.x - 1 && element.y === playerData.y
            }
        )
        let checkMoveDown = wallsData.some(element => {
            // using the same check as above but to the left
            return element.x === playerData.x && element.y === playerData.y + 1 
            }
        )
        let checkMoveUp = wallsData.some(element => {
            // using the same check as above but to the left
            return element.x === playerData.x && element.y === playerData.y - 1 
            }
        )
        
        let checkTreasure = treasureData.some(element =>{
            // this will check if we are on the treasure not accounting for any movement
            return element.x === playerData.x && element.y === playerData.y
        })


        // Simple if statements for our keypresses this can definitly be refactored 
        if(e.key === "s"){
           if(checkMoveDown === false && !startDiv.classList.contains("show")){
            playerData.y += 1 
            // this only works because our board is 1000 x 1000 making each square exactly 50x50px 
            playerDiv.style.top = playerData.y *50 - 50 + "px";
           }}
        if(e.key === "w"){
            if(checkMoveUp === false && !startDiv.classList.contains("show")){
             playerData.y -= 1 
             playerDiv.style.top = playerData.y * 50 - 50 + "px";
            }}
        if(e.key === "d"){
            if(checkMoveRight === false && !startDiv.classList.contains("show")){
            playerData.x += 1 
            // I had to subtract 9 from the initial player data because the player starts on x = 10 but the playerDiv's movement is relative to its original position
            playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px" ;
            }}
        if(e.key === "a"){
            if(checkMoveLeft === false && !startDiv.classList.contains("show")){
            playerData.x -= 1 
            playerDiv.style.left = (playerData.x - 9) * 50 - 50 + "px";
            }}
            // character needs to be over the treasure then moved to trigger a win could be better
        if(checkTreasure === true){
            // start time is defined after the start button is clicked and we define end time here
            let endTime = new Date()

            // pushing the end time to our storage array 
            timeStorage.push(endTime)
            // we get our elapsed time by subtracting index 1 (end time) and index 0 (start time) and setting it to a variable. Divide by 1000 to get seconds
            let elapsedTime = (timeStorage[1] - timeStorage[0])

            // storing out elapsed time in an array elapsedTimeStorage
            elapsedTimeStorage.push(elapsedTime)

            // send times to local storage
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



