// our game instance lives here
/** @type {import("../typings/phaser")} */
/* create our game class, bring in all the scenes */
import Phaser from 'phaser';
import config from './config';
import MainScene from './scenes/Mainscene';

class Game extends Phaser.Game {
  constructor() {
    // add config file to the game
    super(config);
    // add all scenes here
    this.scene.add('MainScene', MainScene);
    // << start game with main scene here >>//
    this.scene.start('Mainscene');
  }
}
// create new instance of game
window.onload = function () {
  window.game = new Game();
};
