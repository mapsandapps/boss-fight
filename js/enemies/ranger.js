var Ranger = new Phaser.Class({
  Extends: Enemy,

  initialize: function Ranger(scene, position, texture, type) {
    this.hp = 11;
    this.damage = 1;
    const frame = 7;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
