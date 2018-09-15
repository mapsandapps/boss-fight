var HUD = new Phaser.Class({
  Extends: Phaser.GameObjects.Container,

  initialize: function HUD(x, y, scene) {
    Phaser.GameObjects.Container.call(this, scene, x, y);
    this.hero = scene.battleScene.hero;
    scene.battleScene.events.on('takeDamage', this.updateHero);
  },
  updateHero: function(type, hp) {
    console.log(type);
    console.log(hp);
  }
});
