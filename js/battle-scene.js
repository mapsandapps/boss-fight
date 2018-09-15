var BattleScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function BattleScene() {
    Phaser.Scene.call(this, { key: 'BattleScene' });
  },
  create: function() {
    this.cameras.main.setBackgroundColor('rgba(220, 220, 220, 0.5)');

    // enemy - warrior
    var barbarian = new Enemy(this, 120, 50, 'adventurers', 0, 'Barbarian', 100, 20);
    this.add.existing(barbarian);

    // enemy - mage
    var bard = new Enemy(this, 200, 50, 'adventurers', 1, 'Bard', 80, 8);
    this.add.existing(bard);

    var dragonOrange = new PlayerCharacter(this, 160, 180, 'dragonorange', null, 'Dragon2', 50, 3);
    this.add.existing(dragonOrange);

    this.enemies = [ barbarian, bard ];
    this.hero = dragonOrange;

    this.units = [ ...this.enemies, ...[ this.hero ] ];

    this.scene.launch('UIScene');

    this.index = -1; // currently active unit in this.units
  },
  nextTurn: function() {
    this.index++;

    if (this.index >= this.units.length) {
      this.index = 0;
    }
    if (this.units[this.index]) {
      if (this.units[this.index] instanceof PlayerCharacter) {
        this.events.emit('PlayerSelect', this.index);
      } else {
        this.units[this.index].attack(this.hero);

        this.time.addEvent({
          delay: 3000,
          callback: this.nextTurn,
          callbackScope: this
        });
      }
    }
  },
  receivePlayerSelection: function(action, target) {
    if (action === 'attack') {
      this.units[this.index].attack(this.enemies[target]);
    }
    this.time.addEvent({
      delay: 3000,
      callback: this.nextTurn,
      callbackScope: this
    });
  }
});
