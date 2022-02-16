




//  here we are creating data for the player div that we can change to move his position
let playerData = {
    // this data represents where the player starts
    x: 10,
    y: 1
}
// here will be the giant wall of wall data. Refer to the game board plan in the planning folder to help understanding
let wallsData = [
    {x:9,y:1},{x:9,y:2},{x:8,y:2},{x:7,y:2},{x:6,y:2},{x:5,y:2},{x:5,y:2},{x:4,y:2},{x:3,y:2},{x:2,y:2},{x:1,y:2},{x:1,y:3},{x:1,y:4},
    {x:1,y:5},{x:1,y:6},{x:1,y:7},{x:1,y:8},{x:1,y:9},{x:1,y:10},{x:1,y:11},{x:4,y:5},{x:5,y:5},{x:6,y:5},{x:7,y:5},{x:8,y:5},{x:9,y:5},
    {x:10,y:5},{x:11,y:5},{x:12,y:5},{x:13,y:5},{x:11,y:1},{x:11,y:2},{x:11,y:3},{x:11,y:4},{x:15,y:1},{x:15,y:2},{x:15,y:3},{x:15,y:4},
    {x:15,y:5},{x:16,y:5},{x:19,y:1},{x:19,y:2},{x:19,y:3},{x:19,y:4},{x:19,y:5},{x:20,y:5},{x:10,y:0},{x:1,y:6},{x:1,y:7},{x:1,y:8},{x:1,y:9}
    ,{x:1,y:10},{x:1,y:6},{x:2,y:11},{x:3,y:11},{x:4,y:11},{x:5,y:11},{x:5,y:12},{x:5,y:13},{x:5,y:14},{x:5,y:15},{x:4,y:15},{x:3,y:15}
    ,{x:2,y:15},{x:1,y:15},{x:0,y:15},{x:0,y:16},{x:0,y:17},{x:0,y:18},{x:0,y:19},{x:0,y:20},{x:0,y:21},{x:1,y:21},{x:2,y:21},{x:3,y:21}
    ,{x:4,y:21},{x:5,y:21},{x:6,y:21},{x:7,y:21},{x:8,y:21},{x:9,y:21},{x:10,y:21},{x:11,y:21},{x:12,y:21},{x:13,y:21},{x:14,y:21},{x:15,y:21}
    ,{x:16,y:21},{x:17,y:21},{x:18,y:21},{x:19,y:21},{x:20,y:21},{x:21,y:21},{x:21,y:20},{x:21,y:19},{x:21,y:18},{x:21,y:17},{x:21,y:16}
    ,{x:9,y:11},{x:8,y:11},{x:8,y:12},{x:8,y:13},{x:8,y:14},{x:8,y:15},{x:9,y:15},{x:10,y:15},{x:11,y:15},{x:12,y:15},{x:13,y:15},{x:12,y:14}
    ,{x:12,y:13},{x:12,y:12},{x:12,y:11},{x:13,y:11},{x:13,y:12},{x:13,y:13},{x:13,y:14},{x:10,y:16},{x:10,y:17},{x:10,y:18},{x:13,y:16}
    ,{x:13,y:17},{x:13,y:18},{x:11,y:18},{x:12,y:18},{x:18,y:10},{x:19,y:10},{x:20,y:10},{x:21,y:10},{x:21,y:9},{x:21,y:8},{x:21,y:7}
    ,{x:21,y:6},{x:18,y:11},{x:18,y:12},{x:18,y:13},{x:18,y:14},{x:18,y:15},{x:19,y:15},{x:20,y:15},{x:12,y:0},{x:13,y:0},{x:14,y:0}
    ,{x:16,y:0},{x:17,y:0},{x:18,y:0}

]
// these are the data coordinates for our treasure data 
let treasureData = [
    {x:19,y:16},{x:19,y:17},{x:20,y:17},{x:20,y:16}
]

// player div selector 
const playerDiv = document.querySelector("#player")

// used to store our start time and end time. Its cleared out when the restart button is pressed
let timeStorage = []
// this stores our elapsed time adding connection to local storage soon

let elapsedTimeStorage = []
let localElapsedTimeStorage = []


// selecting start button, start div, and win div for later use.
let startBtn = document.querySelector("#start")
let startDiv = document.querySelector(".start-message")
let winDiv = document.querySelector(".win-message")
let timeDisplay = document.querySelector(".time-display")

    window.addEventListener("keypress",(e)=>{

        // these checks need to be inside our move event listener so that they are checked every keypress otherwise they are static and dont work well
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
   





