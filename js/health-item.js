var HealthItem = new Phaser.Class({
  Extends: Phaser.GameObjects.Text,

  initialize: function HealthItem(character, scene) {
    this.character = character;
    var offset = character.scaleY * (character.height / 2) + 10;
    if (character instanceof Enemy) {
      offset = offset * -1;
    }
    this.healthText = Phaser.GameObjects.Text.call(this, scene, character.x, character.y + offset, '100%', {
      color: '#ffffff',
      align: 'center',
      fontSize: 15
    });
    this.setOrigin(0.5);
    console.log(this.character);
  },
  updateScore: function(character) {
    console.log(character);
    this.healthText.setText(character.hp * 100 / character.maxHp + '%');
  }
});
