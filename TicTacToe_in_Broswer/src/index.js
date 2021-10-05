const View = require("./ttt-view");
const Game = require("../ttt_node/game");



document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const container = document.getElementById('ttt');
  const game = new Game();
  const view = new View(game, container);
});
