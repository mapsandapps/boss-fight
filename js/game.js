var BootScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function BootScene() {
    Phaser.Scene.call(this, { key: 'BootScene' });
  },
  preload: function() {
    // load resources
    this.load.spritesheet("adventurers", "assets/adventurers.png", { frameWidth: 32, frameHeight: 32 });
    this.load.image("dragonorange", "assets/dragonorange.png");
  },
  create: function() {
    this.scene.start('BattleScene');
  }
});

var config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 375,
  height: 667,
  zoom: 1,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0}
    }
  },
  scene: [
    BootScene,
    BattleScene,
    UIScene
  ]
};

var game = new Phaser.Game(config);
