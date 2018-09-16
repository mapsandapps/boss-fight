var Wizard = new Phaser.Class({
  Extends: Enemy,

  initialize: function Wizard(scene, position, texture, type) {
    this.hp = 6;
    this.damage = 1;
    const frame = 11;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
