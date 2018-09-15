var UIScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function UIScene() {
    Phaser.Scene.call(this, { key: 'UIScene' });
  },
  create: function() {
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x031f4c, 1);
    this.graphics.strokeRect(2, 230, 90, 100);
    this.graphics.fillRect(2, 230, 90, 100);
    this.graphics.strokeRect(95, 230, 90, 100);
    this.graphics.fillRect(95, 230, 90, 100);
    this.graphics.strokeRect(188, 230, 130, 100);
    this.graphics.fillRect(188, 230, 130, 100);

    // menus:
    this.menus = this.add.container();

    this.actionsMenu = new ActionsMenu(100, 233, this);
    this.enemiesMenu = new EnemiesMenu(8, 233, this);

    this.currentMenu = this.actionsMenu;

    this.menus.add(this.actionsMenu);
    this.menus.add(this.enemiesMenu);

    this.battleScene = this.scene.get('BattleScene');

    this.remapEnemies();
    this.remapHeroes();

    this.input.keyboard.on('keydown', this.onKeyInput, this);

    this.battleScene.events.on('PlayerSelect', this.onPlayerSelect, this);

    this.events.on('SelectEnemies', this.onSelectEnemies, this);
    this.events.on('Enemy', this.onEnemy, this);

    this.message = new Message(this, this.battleScene.events);
    this.add.existing(this.message);

    this.battleScene.nextTurn();
  },
  // create() is above
  onEnemy: function(index) {
    this.actionsMenu.deselect();
    this.enemiesMenu.deselect();
    this.currentMenu = null;
    this.battleScene.receivePlayerSelection('attack', index);
  },
  onKeyInput: function(event) {
    if (this.currentMenu) {
      if (event.code === 'ArrowUp') {
        this.currentMenu.moveSelectionUp();
      } else if (event.code === 'ArrowDown') {
        this.currentMenu.moveSelectionDown();
      } else if (event.code === 'Space' || event.code === 'ArrowLeft') {
        this.currentMenu.confirm();
      }
    }
  },
  onPlayerSelect: function(id) {
    this.actionsMenu.select(0);
    this.currentMenu = this.actionsMenu;
  },
  onSelectEnemies: function() {
    this.currentMenu = this.enemiesMenu;
    this.enemiesMenu.select(0);
  },
  remapEnemies: function() {
    var enemies = this.battleScene.enemies;
    this.enemiesMenu.remap(enemies);
  },
  remapHeroes: function() {
    var heroes = this.battleScene.heroes;
  }
});
