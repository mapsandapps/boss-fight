var Monk = new Phaser.Class({
  Extends: Enemy,

  initialize: function Monk(scene, position, texture, type) {
    this.hp = 8;
    this.damage = 1;
    const frame = 5;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
