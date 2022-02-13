




//  here we are creating data for the player div that we can change to move his position
let playerData = {
    x: 0,
    y: 0
}
// player div selector 
const playerDiv = document.querySelector("#player")

// keypress event listener to move the player using the data 


// in the process of getting the wall boundaries I first need to select them all with querySelectorAll
let walls = document.querySelectorAll(".wall")
console.log(walls)
// after we do this we have a node list of the walls so we take that list and creat an array out of it.
let wallsArray = Array.from(walls)

// now we have an array of elements and we try and get the boundaries of these elements using this function
function getWallRects(){
    // flatmap is a combination of map and flat getting an array thats falttened by one level.
    return wallsArray.flatMap(wall => wall.getBoundingClientRect())
}
// after running this function we have an array of all the wall boundaries

// Now we need a function to get our playerRect
function getPlayerRect(){
  return  playerDiv.getBoundingClientRect()
}
getPlayerRect()
// Need a function that can compare the BoundingRect of each thing to detect collosion in each direction
function isCollisionWest(rect1, rect2){
    return(
        rect1.left + 10 < rect2.right 
    )
}
function isCollisionNorth(rect1, rect2){
    return(
        
        rect1.top + 10 < rect2.bottom
    )
}
function isCollisionEast(rect1, rect2){
    return(
        rect1.right + 10 > rect2.left
    )
}
function isCollisionSouth(rect1, rect2){
    return(
        rect1.bottom + 10 > rect2.top 
    )
}

// now we try and put it together into a function for checking movement 
function checkMoveWest() {
    const playerRect = getPlayerRect()
    const insideWall = getWallRects().some(rect => isCollisionWest(playerRect, rect))
    if(insideWall === true){
        return false
    }else {
        return true}
    }
function checkMoveNorth() {
    const playerRect = getPlayerRect()
    const insideWall = getWallRects().some(rect => isCollisionNorth(playerRect, rect))
    if(insideWall === true){
        return false
    }else {
        return true}
    }
function checkMoveEast() {
    const playerRect = getPlayerRect()
    const insideWall = getWallRects().some(rect => isCollisionEast(playerRect, rect))
    if(insideWall === true){
        return false
    }else {
        return true}
    }
function checkMoveSouth() {
    const playerRect = getPlayerRect()
    const insideWall = getWallRects().some(rect => isCollisionSouth(playerRect, rect))
    if(insideWall === true){
        return false
    }else {
        return true}
    }


    window.addEventListener("keypress",(e)=>{
    
        if(e.key === "w" && checkMoveNorth() === false ){
            playerData.y = playerData.y - 10
        }else if(e.key === "s"  ){
            playerData.y = playerData.y + 10 
        }else if(e.key === "d"){
            playerData.x = playerData.x + 10
        }else if(e.key === "a"){
            playerData.x = playerData.x - 10 
        }
        playerDiv.style.left = `${playerData.x}px`
        playerDiv.style.top = `${playerData.y}px`
        console.log(getPlayerRect())
        console.log(checkMoveNorth())
        console.log(isCollisionNorth())
    })




// maze will need walls character cannot walk through 
// this  will probably be in the walk function itself for the character

// add player character

// player character move function

// player character attack function

// player character lose on hit

// player character win on touch treasure 

// add enemy characters

// enemy character obstacle

// enemy character removal

// add treasure 

// connect touching treasure with win condition 