


function wait(time){
    return new Promise(resolve => setTimeout(resolve, time))
}

async function enemy1WalkUp(time){
    enemiesData[0].y -= 1 
    enemy1Div.style.top = (enemiesData[0].y - 10) * 50 - 50 + "px"
   await wait(time)
    
}
async function enemy2WalkUp(time){
    enemiesData[1].y -= 1 
    enemy2Div.style.top = (enemiesData[1].y - 4) * 50 - 50 + "px"
    await wait(time)
    
}
async function enemy3WalkUp(time){
    enemiesData[2].y -= 1 
    enemy3Div.style.top = (enemiesData[2].y - 4) * 50 - 50 + "px"
    await wait(time)
    
}
async function enemy1WalkDown(time){
    enemiesData[0].y += 1 
    enemy1Div.style.top = (enemiesData[0].y - 10) * 50 - 50 + "px"
   await wait(time)
    
}
async function enemy2WalkDown(time){
    enemiesData[1].y += 1 
    enemy2Div.style.top = (enemiesData[1].y - 4) * 50 - 50 + "px"
    await wait(time)
    
}
async function enemy3WalkDown(time){
    enemiesData[2].y += 1 
    enemy3Div.style.top = (enemiesData[2].y - 4) * 50 - 50 + "px"
    await wait(time)
    
}


async function moveEnemy1(){
    await enemy1WalkUp(1000)
    await enemy1WalkUp(1000)
    await enemy1WalkUp(1000)
    await enemy1WalkUp(1000)
    await enemy1WalkUp(1000)
    await enemy1WalkDown(1000)
    await enemy1WalkDown(1000)
    await enemy1WalkDown(1000)
    await enemy1WalkDown(1000)
    await enemy1WalkDown(1000)
 }
 async function moveEnemy2(){
    await enemy2WalkDown(1000)
    await enemy2WalkDown(1000)
    await enemy2WalkDown(1000)
    await enemy2WalkDown(1000)
    await enemy2WalkDown(1000)
    await enemy2WalkUp(1000)
    await enemy2WalkUp(1000)
    await enemy2WalkUp(1000)
    await enemy2WalkUp(1000)
    await enemy2WalkUp(1000)
 }
 async function moveEnemy3(){
    await enemy3WalkDown(1000)
    await enemy3WalkDown(1000)
    await enemy3WalkDown(1000)
    await enemy3WalkDown(1000)
    await enemy3WalkDown(1000)
    await enemy3WalkUp(1000)
    await enemy3WalkUp(1000)
    await enemy3WalkUp(1000)
    await enemy3WalkUp(1000)
    await enemy3WalkUp(1000)
 }