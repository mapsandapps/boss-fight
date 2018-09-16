var Sorcerer = new Phaser.Class({
  Extends: Enemy,

  initialize: function Sorcerer(scene, position, texture, type) {
    this.hp = 5;
    this.damage = 1;
    const frame = 9;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
