var BattleScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function BattleScene() {
    Phaser.Scene.call(this, { key: 'BattleScene' });
    this.enemies = [];
    this.possibleEnemies = [
      'barbarian',
      'bard',
      'cleric',
      'druid',
      'fighter',
      'monk',
      'paladin',
      'ranger',
      'rogue',
      'sorcerer',
      'warlock',
      'wizard'
    ];
  },
  create: function() {
    this.cameras.main.setBackgroundColor('rgba(220, 220, 220, 0.5)');

    this.randomEnemies = this.pickRandomEnemies();
    this.createEnemies();

    var dragonOrange = new PlayerCharacter(this, 187, 420, 'dragonorange', null, 'Dragon', 50, 3);
    this.add.existing(dragonOrange);

    this.hero = dragonOrange;

    this.units = [ ...this.enemies, ...[ this.hero ] ];

    this.scene.launch('UIScene');

    this.index = -1; // currently active unit in this.units
  },
  awaitEnemySelection: function(action) {
    this.enemies.forEach(enemy => {
      enemy.setTargetableBy(action);
    });
  },
  createEnemies: function() {
    const positions = [
      [80, 300],
      [134, 270],
      [188, 240],
      [242, 270],
      [296, 300]
    ];
    this.randomEnemies.forEach((enemy, index) => {
      this.createEnemy(enemy, positions[index]);
    });
  },
  createEnemy: function(className, position) {
    var enemy;
    if (className === 'barbarian') {
      enemy = new Barbarian(this, position, 'adventurers', 'Barbarian');
    } else if (className === 'bard') {
      enemy = new Bard(this, position, 'adventurers', 'Bard');
    } else if (className === 'cleric') {
      enemy = new Cleric(this, position, 'adventurers', 'Cleric');
    } else if (className === 'druid') {
      enemy = new Druid(this, position, 'adventurers', 'Druid');
    } else if (className === 'fighter') {
      enemy = new Fighter(this, position, 'adventurers', 'Fighter');
    } else if (className === 'monk') {
      enemy = new Monk(this, position, 'adventurers', 'Monk');
    } else if (className === 'paladin') {
      enemy = new Paladin(this, position, 'adventurers', 'Paladin');
    } else if (className === 'ranger') {
      enemy = new Ranger(this, position, 'adventurers', 'Ranger');
    } else if (className === 'rogue') {
      enemy = new Rogue(this, position, 'adventurers', 'Rogue');
    } else if (className === 'sorcerer') {
      enemy = new Sorcerer(this, position, 'adventurers', 'Sorcerer');
    } else if (className === 'warlock') {
      enemy = new Warlock(this, position, 'adventurers', 'Warlock');
    } else if (className === 'wizard') {
      enemy = new Wizard(this, position, 'adventurers', 'Wizard');
    }
    this.add.existing(enemy);
    this.enemies.push(enemy);
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
  pickRandomEnemies: function() {
    randomEnemies = [];
    while(randomEnemies.length < 5) {
      var randomEnemy = this.possibleEnemies[_.random(0, this.possibleEnemies.length - 1)];
      if (_.indexOf(randomEnemies, randomEnemy) === -1) {
        randomEnemies.push(randomEnemy);
      }
    }
    return randomEnemies;
  },
  receivePlayerSelection: function(action, target) {
    if (action === 'attack') {
      const enemy = _.find(this.enemies, ['type', target]);
      this.units[this.index].attack(enemy);
    }
    this.time.addEvent({
      delay: 3000,
      callback: this.nextTurn,
      callbackScope: this
    });
  }
});
