var HUD = new Phaser.Class({
  Extends: Phaser.GameObjects.Container,

  initialize: function HUD(x, y, scene) {
    Phaser.GameObjects.Container.call(this, scene, x, y);
    this.hero = scene.battleScene.hero;
    this.scene = scene;

    // this.depth = 10;

    this.scene.healthItems = [];

    scene.battleScene.events.on('takeDamage', this.updateScores);

    this.addHealthItems();
  },
  addHealthItems: function() {
    var playerHealth = new HealthItem(this.hero, this.scene);
    playerHealth.type = this.hero.type;
    this.scene.healthItems.push(playerHealth);
    this.add(playerHealth);
    console.log(this.scene.healthItems);
  },
  updateScores: function(character) {
    console.log(character);
    const scoreToUpdate = _.find(this.scene.healthItems, ['type', character.type]);
    console.log(scoreToUpdate);
    scoreToUpdate.updateScore(character);
  }
});
