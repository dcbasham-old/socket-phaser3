import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  // load assets you want to use for players and background img
  preload() {
    this.load.spritesheet('astronaut', 'assets/spritesheets/astronaut3.png', {
      frameWidth: 29,
      frameHeight: 37,
    });
    this.load.image('mainroom', 'assets/backgrounds/mainroom.png');
  }

  // save the context of this to scene variable
  create() {
    const scene = this;
    // BACKGROUND
    this.add.image(0, 0, 'mainroom').setOrigin(0);

    // CREATE SOCKET
    this.socket = io();

    // Launch Waiting room.

    scene.scene.launch('WaitingRoom', { socket: scene.socket });
    //we do this so that it appears at the start of our game. and see below.
  }
  update() {}
}
/* We launch the waiting room from here too so that we can pass it our socket. Instead of starting it on the game instance, so that we don't create a new one on waiting room. this would tell the server we have another player instead of connect the same one.
NOTE: we will have to initialize it in waiting room with phaser's init() method. */
