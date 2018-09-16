var Fighter = new Phaser.Class({
  Extends: Enemy,

  initialize: function Fighter(scene, position, texture, type) {
    this.hp = 13;
    this.damage = 1;
    const frame = 4;
    Enemy.call(this, scene, position[0], position[1], texture, frame, type, this.hp, this.damage);
  }
});
