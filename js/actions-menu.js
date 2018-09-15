var ActionsMenu = new Phaser.Class({
  Extends: Phaser.GameObjects.Container,

  initialize: function ActionsMenu(x, y, scene) {
    Phaser.GameObjects.Container.call(this, scene, x, y);
    this.menuItems = [];
    this.menuItemIndex = 0;
    this.disabled = true;
    this.x = x;
    this.y = y;
    this.addMenuItems();
    this.disable();
  },
  addMenuItems: function(action) {
    var swipeItem = new SwipeItem(this.menuItems.length, 'Swipe', this.scene);
    this.menuItems.push(swipeItem);
    this.add(swipeItem);
    // this.addMenuItem('Flame Breath');
    // this.addMenuItem('Fireball');
    var inventoryItem = new InventoryItem(this.menuItems.length, 'Inventory', this.scene);
    this.menuItems.push(inventoryItem);
    this.add(inventoryItem);
  },
  confirm: function() {
    // TODO: move this into menu-item (or the actions themselves) and only emit SelectEnemies when the player needs to select them
    this.scene.events.emit('SelectEnemies');
  },
  disable: function() {
    console.log('disable');
    this.disabled = true;
    this.menuItems.forEach(action => {
      action.disable();
    });
  },
  enable: function() {
    console.log('enable');
    this.disabled = false;
    this.menuItems.forEach(action => {
      action.enable();
    });
  },
  remap: function(units) {
    for (var i = 0; i < units.length; i++) {
      var unit = units[i];
      this.addMenuItem(unit.type);
    }
  }
});
