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
  }
}
