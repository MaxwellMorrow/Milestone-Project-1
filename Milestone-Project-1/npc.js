


function wait(time){
    return new Promise(resolve => setTimeout(resolve, time))
}

async function enemy1WalkUp(time){
    enemiesData[0].y -= 1 
    enemy1Div.style.top = (enemiesData[0].y - 10) * 50 - 50 + "px"
   await wait(time)
    
}
async function enemy2WalkUp(time){
    enemiesData[1].y - 1 
    enemy1Div.style.top = (enemiesData[0].y - 4) * 50 - 50 + "px"
    await wait(time)
    
}
async function enemy3WalkUp(time){
    enemiesData[2].y - 1 
    enemy1Div.style.top = (enemiesData[0].y - 4) * 50 - 50 + "px"
    await wait(time)
    
}


async function moveEnemy1(){
    await enemy1WalkUp(5000)
    await enemy1WalkUp(5000)
    await enemy1WalkUp(5000)
    await enemy1WalkUp(5000)
    await enemy1WalkUp(5000)
     
 }
