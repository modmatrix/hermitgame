import { Scene } from 'phaser'

export default class MainMenu extends Scene {

  constructor () {
    super('MainMenu');
  }

  preload() {
    this.load.audio('labyrinth', 'assets/music/labyrinth.mp3');
  }

  create() {
    
    this.background = this.add.image(512, 384, 'main-menu-bg')

    this.title = this.add.text(512, 300, 'The Game Where You\'re a Garden Hermit', {
      fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'center'
    }).setOrigin(0.5).setDepth(100);

    this.title = this.add.text(512, 360, 'by Curt and Travis', {
      fontFamily: 'Arial Black', fontSize: 20, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'center'
    }).setOrigin(0.5).setDepth(100)

    this.title = this.add.text(512, 480, 'press Space to begin, I guess', {
      fontFamily: 'Arial Black', fontSize: 24, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'center'
    }).setOrigin(0.5).setDepth(100)

    this.bgm = this.sound.add('labyrinth')

    this.bgm.play({
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    })

    this.controls = {
      space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
    }

  }

  update() {

    if (this.controls.space.isDown) {
      this.bgm.stop()
      this.scene.start('Garden')
    }

  }

}
