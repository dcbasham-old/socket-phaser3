// phaser game settings
export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  render: {
    pixelArt: true,
  },
  scale: {
    parent: 'mygame',
    autoCenter: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      // positive pulls gameobjects up along the y axis, negative pulls game objs down along the y-axis.
      debug: false, // whether physics engine should run in debug mode
      // enableBody: true, ??
    },
  },
  dom: {
    createContainer: true,
  },
  scene: [],
};
