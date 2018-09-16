var Rogue = new Phaser.Class({
  Extends: Enemy,

  initialize: function Rogue(scene, position, texture, type) {
    this.hp = 7;
    this.damage = 1;
    const frame = 8;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
