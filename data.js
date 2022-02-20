// I want these to load before npc.js and main.js placing them here should do that
let boardSize = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--board-size")
); // using this to try and make the game responsive
let playerSize = boardSize / 20;

let playerData = {
  // this data represents where the player starts
  x: 10,
  y: 1,
};

let wallsData = [
  { x: 9, y: 1 },
  { x: 9, y: 2 },
  { x: 8, y: 2 },
  { x: 7, y: 2 },
  { x: 6, y: 2 },
  { x: 5, y: 2 },
  { x: 5, y: 2 },
  { x: 4, y: 2 },
  { x: 3, y: 2 },
  { x: 2, y: 2 },
  { x: 1, y: 2 },
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
  { x: 1, y: 6 },
  { x: 1, y: 7 },
  { x: 1, y: 8 },
  { x: 1, y: 9 },
  { x: 1, y: 10 },
  { x: 1, y: 11 },
  { x: 4, y: 5 },
  { x: 5, y: 5 },
  { x: 6, y: 5 },
  { x: 7, y: 5 },
  { x: 8, y: 5 },
  { x: 9, y: 5 },
  { x: 10, y: 5 },
  { x: 11, y: 5 },
  { x: 12, y: 5 },
  { x: 13, y: 5 },
  { x: 11, y: 1 },
  { x: 11, y: 2 },
  { x: 11, y: 3 },
  { x: 11, y: 4 },
  { x: 15, y: 1 },
  { x: 15, y: 2 },
  { x: 15, y: 3 },
  { x: 15, y: 4 },
  { x: 15, y: 5 },
  { x: 16, y: 5 },
  { x: 19, y: 1 },
  { x: 19, y: 2 },
  { x: 19, y: 3 },
  { x: 19, y: 4 },
  { x: 19, y: 5 },
  { x: 20, y: 5 },
  { x: 10, y: 0 },
  { x: 1, y: 6 },
  { x: 1, y: 7 },
  { x: 1, y: 8 },
  { x: 1, y: 9 },
  { x: 1, y: 10 },
  { x: 1, y: 6 },
  { x: 2, y: 11 },
  { x: 3, y: 11 },
  { x: 4, y: 11 },
  { x: 5, y: 11 },
  { x: 5, y: 12 },
  { x: 5, y: 13 },
  { x: 5, y: 14 },
  { x: 5, y: 15 },
  { x: 4, y: 15 },
  { x: 3, y: 15 },
  { x: 2, y: 15 },
  { x: 1, y: 15 },
  { x: 0, y: 15 },
  { x: 0, y: 16 },
  { x: 0, y: 17 },
  { x: 0, y: 18 },
  { x: 0, y: 19 },
  { x: 0, y: 20 },
  { x: 0, y: 21 },
  { x: 1, y: 21 },
  { x: 2, y: 21 },
  { x: 3, y: 21 },
  { x: 4, y: 21 },
  { x: 5, y: 21 },
  { x: 6, y: 21 },
  { x: 7, y: 21 },
  { x: 8, y: 21 },
  { x: 9, y: 21 },
  { x: 10, y: 21 },
  { x: 11, y: 21 },
  { x: 12, y: 21 },
  { x: 13, y: 21 },
  { x: 14, y: 21 },
  { x: 15, y: 21 },
  { x: 16, y: 21 },
  { x: 17, y: 21 },
  { x: 18, y: 21 },
  { x: 19, y: 21 },
  { x: 20, y: 21 },
  { x: 21, y: 21 },
  { x: 21, y: 20 },
  { x: 21, y: 19 },
  { x: 21, y: 18 },
  { x: 21, y: 17 },
  { x: 21, y: 16 },
  { x: 9, y: 11 },
  { x: 8, y: 11 },
  { x: 8, y: 12 },
  { x: 8, y: 13 },
  { x: 8, y: 14 },
  { x: 8, y: 15 },
  { x: 9, y: 15 },
  { x: 10, y: 15 },
  { x: 11, y: 15 },
  { x: 12, y: 15 },
  { x: 13, y: 15 },
  { x: 12, y: 14 },
  { x: 12, y: 13 },
  { x: 12, y: 12 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
  { x: 13, y: 12 },
  { x: 13, y: 13 },
  { x: 13, y: 14 },
  { x: 10, y: 16 },
  { x: 10, y: 17 },
  { x: 10, y: 18 },
  { x: 13, y: 16 },
  { x: 13, y: 17 },
  { x: 13, y: 18 },
  { x: 11, y: 18 },
  { x: 12, y: 18 },
  { x: 18, y: 10 },
  { x: 19, y: 10 },
  { x: 20, y: 10 },
  { x: 21, y: 10 },
  { x: 21, y: 9 },
  { x: 21, y: 8 },
  { x: 21, y: 7 },
  { x: 21, y: 6 },
  { x: 18, y: 11 },
  { x: 18, y: 12 },
  { x: 18, y: 13 },
  { x: 18, y: 14 },
  { x: 18, y: 15 },
  { x: 19, y: 15 },
  { x: 20, y: 15 },
  { x: 12, y: 0 },
  { x: 13, y: 0 },
  { x: 14, y: 0 },
  { x: 16, y: 0 },
  { x: 17, y: 0 },
  { x: 18, y: 0 },
  { x: 6, y: 11 },
  { x: 10, y: 11 },
  { x: 11, y: 11 },
];
let toggleWallData = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
];

let treasureData = [
  { x: 9, y: 13 },
  { x: 10, y: 13 },
  { x: 9, y: 14 },
  { x: 10, y: 14 },
];
let wallToggleData = [
  { x: 19, y: 16 },
  { x: 19, y: 17 },
  { x: 20, y: 17 },
  { x: 20, y: 16 },
];

let enemiesData = [
  { x: 7, y: 11 },
  { x: 14, y: 5 },
  { x: 17, y: 5 },
];

let elapsedTimeStorage = [];
