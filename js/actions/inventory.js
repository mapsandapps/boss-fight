var InventoryItem = new Phaser.Class({
  Extends: MenuItem,

  initialize: function InventoryItem(menuIndex, text, scene) {
    MenuItem.call(this, menuIndex, text, scene);
    this.disableable = false;
  }
});
