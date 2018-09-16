var Paladin = new Phaser.Class({
  Extends: Enemy,

  initialize: function Paladin(scene, position, texture, type) {
    this.hp = 11;
    this.damage = 1;
    const frame = 6;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
