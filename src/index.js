// our game instance lives here
/** @type {import("../typings/phaser")} */
/* create our game class, bring in all the scenes */
import 'phaser';
import config from './config/config';
import MainScene from './scenes/Mainscene';
import WaitingRoom from './scenes/WaitingRoom';
class Game extends Phaser.Game {
  constructor() {
    // add config file to the game
    super(config);
    // add all scenes here
    this.scene.add('MainScene', MainScene);
    this.scene.add('WaitingRoom', WaitingRoom);
    // << start game with main scene here >>//
    this.scene.start('Mainscene');
  }
}
// create new instance of game
window.onload = function () {
  window.game = new Game();
};
