var Cleric = new Phaser.Class({
  Extends: Enemy,

  initialize: function Cleric(scene, position, texture, type) {
    this.hp = 9;
    this.damage = 1;
    const frame = 2;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
