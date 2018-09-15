var MenuItem = new Phaser.Class({
  Extends: Phaser.GameObjects.Text,

  initialize: function MenuItem(menuIndex, text, scene) {
    Phaser.GameObjects.Text.call(this, scene, menuIndex * 60, 0, text, {
      color: '#ffffff',
      align: 'center',
      fontSize: 15
    });

    this.disableable = false;
    this.disabled = false;
    this.text = text;
    this.setInteractive();
    this.on('pointerdown', this.select);
  },
  deselect: function() {
    if (this.disabled) {
      this.setColor('#555555');
    } else {
      this.setColor('#ffffff');
    }
  },
  disable: function() {
    if (this.disableable) {
      this.disabled = true;
      this.setColor('#555555');
    }
  },
  enable: function() {
    this.disabled = false;
    this.setColor('#ffffff');
  },
  onMouseInput: function(event) {
    console.log(this.text, 'clicked');
  },
  select: function() {
    this.setColor('#f8ff38');
  }
});
