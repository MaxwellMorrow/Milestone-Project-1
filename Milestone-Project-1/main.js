




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
console.log(playerData)
console.log(wallsData)

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

console.log(checkMoveUp)
console.log(checkMoveDown)
console.log(checkMoveLeft)
console.log(checkMoveRight)
// SUCESSS these functions do detect the walls next to them however we now need to incorporate that into our movement 







// player div selector 
const playerDiv = document.querySelector("#player")




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
            
        if(e.key === "s"){
           if(checkMoveDown === false){
            playerData.y += 1 
            playerDiv.style.top = playerData.y *50 - 50 + "px";
           }
        console.log(playerData)
        
    }
});
    // window.addEventListener("keypress", (e) => {
    //     if (e.key === "d") {
    //       //  if (playerData.x !== WALL_DATA.x)
    //       playerData.x += 1;
    //       playerDIV.style.left = playerData.x * 100 - 100 + "px";
    //     }
    //   });





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