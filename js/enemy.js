var Enemy = new Phaser.Class({
  Extends: Unit,

  initialize: function Enemy(scene, x, y, texture, frame, type, hp, damage) {
    Unit.call(this, scene, x, y, texture, frame, type, hp, damage);
    this.type = type;
    this.flipX = true;
    this.scaleX = 0.5;
    this.scaleY = 0.5;
    this.targetableBy = null;
    this.on('pointerdown', this.select);
  },
  select: function() {
    if (this.targetableBy) {
      this.scene.receivePlayerSelection(this.targetableBy, this.type);
    }
    this.targetableBy = null;
  },
  setTargetableBy: function(action) {
    this.targetableBy = action;
    this.setInteractive();
  }
});
