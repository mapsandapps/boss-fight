var Barbarian = new Phaser.Class({
  Extends: Enemy,

  initialize: function Barbarian(scene, position, texture, type) {
    this.hp = 12;
    this.damage = 1;
    const frame = 0;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
