
// change speed of enemies here
let enemy1Speed = 500
let enemy2Speed = 1000
let enemy3Speed = 750

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
    await enemy1WalkUp(enemy1Speed)
    await enemy1WalkUp(enemy1Speed)
    await enemy1WalkUp(enemy1Speed)
    await enemy1WalkUp(enemy1Speed)
    await enemy1WalkUp(enemy1Speed)
    await enemy1WalkDown(enemy1Speed)
    await enemy1WalkDown(enemy1Speed)
    await enemy1WalkDown(enemy1Speed)
    await enemy1WalkDown(enemy1Speed)
    await enemy1WalkDown(enemy1Speed)
 }
 async function moveEnemy2(){
    await enemy2WalkDown(enemy2Speed)
    await enemy2WalkDown(enemy2Speed)
    await enemy2WalkDown(enemy2Speed)
    await enemy2WalkDown(enemy2Speed)
    await enemy2WalkDown(enemy2Speed)
    await enemy2WalkUp(enemy2Speed)
    await enemy2WalkUp(enemy2Speed)
    await enemy2WalkUp(enemy2Speed)
    await enemy2WalkUp(enemy2Speed)
    await enemy2WalkUp(enemy2Speed)
 }
 async function moveEnemy3(){
    await enemy3WalkDown(enemy3Speed)
    await enemy3WalkDown(enemy3Speed)
    await enemy3WalkDown(enemy3Speed)
    await enemy3WalkDown(enemy3Speed)
    await enemy3WalkDown(enemy3Speed)
    await enemy3WalkUp(enemy3Speed)
    await enemy3WalkUp(enemy3Speed)
    await enemy3WalkUp(enemy3Speed)
    await enemy3WalkUp(enemy3Speed)
    await enemy3WalkUp(enemy3Speed)
 }