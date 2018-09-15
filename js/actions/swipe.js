var SwipeItem = new Phaser.Class({
  Extends: MenuItem,

  initialize: function SwipeItem(menuIndex, text, scene) {
    MenuItem.call(this, menuIndex, text, scene);
    this.disableable = true;
  },
  select: function() {
    this.scene.battleScene.awaitEnemySelection('attack');
  }
});
