// our game instance lives here
/** @type {import("../typings/phaser")} */
/* create our game class, bring in all the scenes */
import 'phaser';
import config from './config';

class Game extends Phase.Game {
  constructor() {
    // add config file to the game
    super(config);
    // add all scenes here

    // << start game with main scene here >>//
  }
}
// create new instance of game
window.onload = function () {
  window.game = new Game();
};
