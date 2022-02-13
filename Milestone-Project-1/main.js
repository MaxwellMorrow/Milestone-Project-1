




//  here we are creating data for the player div that we can change to move his position
let playerData = {
    x: 0,
    y: 0
}
// player div selector 
let playerDiv = document.querySelector("#player")

// keypress event listener to move the player using the data 
window.addEventListener("keypress",(e)=>{
    
    playerDiv.getBoundingClientRect()
    console.log(playerDiv.getBoundingClientRect())

    if(e.key === "w"){
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
})


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

// Need a function that can compare the BoundingRect of each thing to detect collosion
function isCollision(rect1, rect2){
    return(
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom > rect2.top 
    )
}

console.log(getWallRects())
console.log(getPlayerRect())




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