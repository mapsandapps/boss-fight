var UIScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function UIScene() {
    Phaser.Scene.call(this, { key: 'UIScene' });
  },
  create: function() {
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x031f4c, 1);
    this.graphics.strokeRect(0, 0, 375, 147);
    this.graphics.fillRect(0, 0, 375, 147);
    this.graphics.strokeRect(0, 521, 375, 667);
    this.graphics.fillRect(0, 521, 375, 667);

    // menus:
    this.menus = this.add.container();

    this.battleScene = this.scene.get('BattleScene');

    this.actionsMenu = new ActionsMenu(44, 537, this);
    this.hud = new HUD(0, 0, this);

    this.menus.add(this.actionsMenu);
    this.menus.add(this.hud);

    this.remapEnemies();
    this.remapHeroes();

    this.battleScene.events.on('PlayerSelect', this.onPlayerSelect, this);

    this.events.on('SelectEnemies', this.onSelectEnemies, this);
    this.events.on('Enemy', this.onEnemy, this);

    this.message = new Message(this, this.battleScene.events);
    this.add.existing(this.message);

    this.battleScene.nextTurn();
  },
  // create() is above
  onEnemy: function(index) {
    this.actionsMenu.disable();
    this.battleScene.receivePlayerSelection('attack', index);
  },
  onPlayerSelect: function(id) {
    this.actionsMenu.enable();
  },
  onSelectEnemies: function() {
  },
  remapEnemies: function() {
    console.log('remapEnemies');
    var enemies = this.battleScene.enemies;
  },
  remapHeroes: function() {
    console.log('remapHeroes');
    var heroes = this.battleScene.heroes;
  }
});
