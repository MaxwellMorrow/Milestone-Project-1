// selectors
let upBtn = document.querySelector("#up-btn");
let leftBtn = document.querySelector("#left-btn");
let rightBtn = document.querySelector("#right-btn");
let downBtn = document.querySelector("#down-btn");

window.addEventListener("click", (e) => {
  // collosion checks and game start checks. Would like to figure out how to get these to work outside our event listener
  let checkMoveRight = wallsData.some(
    (wall) => wall.x === playerData.x + 1 && wall.y === playerData.y
  );
  let checkMoveLeft = wallsData.some(
    (wall) => wall.x === playerData.x - 1 && wall.y === playerData.y
  );
  let checkMoveDown = wallsData.some(
    (wall) => wall.x === playerData.x && wall.y === playerData.y + 1
  );
  let checkMoveUp = wallsData.some(
    (wall) => wall.x === playerData.x && wall.y === playerData.y - 1
  );
  let checkTreasure = treasureData.some(
    (treasure) => treasure.x === playerData.x && treasure.y === playerData.y
  );
  let checkWallToggle = wallToggleData.some(
    (wallToggle) =>
      wallToggle.x === playerData.x && wallToggle.y === playerData.y
  );
  let gameStarted = !startDiv.classList.contains("show");
  let gameRestarted = !winDiv.classList.contains("show");
  let checkEnemyCollision = enemiesData.some(
    (enemy) => enemy.x === playerData.x && enemy.y === playerData.y
  );

  // Simple if statements for our keypresses this can definitly be refactored
  if (
    e.target === downBtn &&
    checkMoveDown === false &&
    gameStarted &&
    gameRestarted
  ) {
    playerData.y += 1;
    playerDiv.style.top = playerData.y * playerSize - playerSize + "px";
    if (checkEnemyCollision === true) {
      resetPlayer();
    }
  }
  if (
    e.target === upBtn &&
    checkMoveUp === false &&
    gameStarted &&
    gameRestarted
  ) {
    playerData.y -= 1;
    playerDiv.style.top = playerData.y * playerSize - playerSize + "px";
    if (checkEnemyCollision === true) {
      resetPlayer();
    }
  }
  if (
    e.target === rightBtn &&
    checkMoveRight === false &&
    gameStarted &&
    gameRestarted
  ) {
    playerData.x += 1;
    playerDiv.style.left = (playerData.x - 9) * playerSize - playerSize + "px"; // subtract 9 from the initial player data because the player starts on x = 10 but the playerDiv's movement is relative to its original position
    if (checkEnemyCollision === true) {
      resetPlayer();
    }
  }
  if (
    e.target === leftBtn &&
    checkMoveLeft === false &&
    gameStarted &&
    gameRestarted
  ) {
    playerData.x -= 1;
    playerDiv.style.left = (playerData.x - 9) * playerSize - playerSize + "px";
    if (checkEnemyCollision === true) {
      resetPlayer();
    }
  }

  if (checkWallToggle === true && wallsData.length === 149) {
    wallsData.pop(); // removes the last two objects from our wallsData array allowing the player to move through the toggle wall
    wallsData.pop();
    toggleWall.classList.add("hide");
    wallToggle.classList.add("hide");
  }
  if (checkTreasure === true) {
    getEndTime();
    resetPlayer();
    showWin();
    displayTimes();
    wallsData.push(toggleWallData[0]); // pushes our toggle wall data back into wall data to prevent the player from going through it
    wallsData.push(toggleWallData[1]);
    toggleWall.classList.remove("hide");
    wallToggle.classList.remove("hide");
  }
});

window.addEventListener("touchend", (e) => {
  // collosion checks and game start checks. Would like to figure out how to get these to work outside our event listener
  let checkMoveRight = wallsData.some(
    (wall) => wall.x === playerData.x + 1 && wall.y === playerData.y
  );
  let checkMoveLeft = wallsData.some(
    (wall) => wall.x === playerData.x - 1 && wall.y === playerData.y
  );
  let checkMoveDown = wallsData.some(
    (wall) => wall.x === playerData.x && wall.y === playerData.y + 1
  );
  let checkMoveUp = wallsData.some(
    (wall) => wall.x === playerData.x && wall.y === playerData.y - 1
  );
  let checkTreasure = treasureData.some(
    (treasure) => treasure.x === playerData.x && treasure.y === playerData.y
  );
  let checkWallToggle = wallToggleData.some(
    (wallToggle) =>
      wallToggle.x === playerData.x && wallToggle.y === playerData.y
  );
  let gameStarted = !startDiv.classList.contains("show");
  let gameRestarted = !winDiv.classList.contains("show");
  let checkEnemyCollision = enemiesData.some(
    (enemy) => enemy.x === playerData.x && enemy.y === playerData.y
  );

  // Simple if statements for our keypresses this can definitly be refactored
  if (
    e.target === downBtn &&
    checkMoveDown === false &&
    gameStarted &&
    gameRestarted
  ) {
    playerData.y += 1;
    playerDiv.style.top = playerData.y * playerSize - playerSize + "px";
    if (checkEnemyCollision === true) {
      resetPlayer();
    }
  }
  if (
    e.target === upBtn &&
    checkMoveUp === false &&
    gameStarted &&
    gameRestarted
  ) {
    playerData.y -= 1;
    playerDiv.style.top = playerData.y * playerSize - playerSize + "px";
    if (checkEnemyCollision === true) {
      resetPlayer();
    }
  }
  if (
    e.target === rightBtn &&
    checkMoveRight === false &&
    gameStarted &&
    gameRestarted
  ) {
    playerData.x += 1;
    playerDiv.style.left = (playerData.x - 9) * playerSize - playerSize + "px"; // subtract 9 from the initial player data because the player starts on x = 10 but the playerDiv's movement is relative to its original position
    if (checkEnemyCollision === true) {
      resetPlayer();
    }
  }
  if (
    e.target === leftBtn &&
    checkMoveLeft === false &&
    gameStarted &&
    gameRestarted
  ) {
    playerData.x -= 1;
    playerDiv.style.left = (playerData.x - 9) * playerSize - playerSize + "px";
    if (checkEnemyCollision === true) {
      resetPlayer();
    }
  }

  if (checkWallToggle === true && wallsData.length === 149) {
    wallsData.pop(); // removes the last two objects from our wallsData array allowing the player to move through the toggle wall
    wallsData.pop();
    toggleWall.classList.add("hide");
    wallToggle.classList.add("hide");
  }
  if (checkTreasure === true) {
    getEndTime();
    resetPlayer();
    showWin();
    displayTimes();
    wallsData.push(toggleWallData[0]); // pushes our toggle wall data back into wall data to prevent the player from going through it
    wallsData.push(toggleWallData[1]);
    toggleWall.classList.remove("hide");
    wallToggle.classList.remove("hide");
  }
});
