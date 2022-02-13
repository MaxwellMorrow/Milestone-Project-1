




//  here we are creating data for the player div that we can change to move his position
let playerData = {
    x: 0,
    y: 0
}
// player div selector 
let playerDiv = document.querySelector("#player")

// keypress event listener to move the player using the data 
window.addEventListener("keypress",(e)=>{
    
    if(e.key === "w"){
        playerData.y = playerData.y - 10
    }else if(e.key === "s"){
        playerData.y = playerData.y + 10 
    }else if(e.key === "d"){
        playerData.x = playerData.x + 10
    }else if(e.key === "a"){
        playerData.x = playerData.x - 10 
    }
    
    playerDiv.style.left = `${playerData.x}px`
    playerDiv.style.top = `${playerData.y}px`
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