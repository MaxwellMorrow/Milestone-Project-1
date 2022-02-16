




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
    ,{x:21,y:6},{x:18,y:11},{x:18,y:12},{x:18,y:13},{x:18,y:14},{x:18,y:15},{x:19,y:15},{x:20,y:15}
    
]






// player div selector 
const playerDiv = document.querySelector("#player")




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
const playerRect = getPlayerRect()
console.log(playerRect)
// Need a function that can compare the BoundingRect of each thing to detect collosion in each direction
function isCollisionWest(rect1, rect2){
    return(
        rect1.left + 10 < rect2.right 
    )
}
function isCollisionNorth(rect1, rect2){
    console.log(rect1)
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
    console.log(playerRect)
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
        const playerRect = getPlayerRect()
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