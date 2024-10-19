import { Scene } from 'phaser'
import Player from '../Player'

export default class Garden extends Scene {

  camera: Phaser.Cameras.Scene2D.Camera

  constructor () {
    super('Garden')
  }

  preload() {
    this.load.audio('shadows', 'assets/music/shadows.mp3');
  }

  create() {

    this.camera = this.cameras.main
    this.camera.setBackgroundColor(0x00ff00)
    this.camera.setBackgroundColor(0x00ff00)

    this.player = new Player(this, 100, 200);

    const solidObjects = this.physics.add.staticGroup()
    solidObjects.create(300, 300, 'star')

    this.physics.add.collider(this.player, solidObjects)

    const bgm = this.sound.add('shadows')

    bgm.play({
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    })

    // this.gameText = this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
    //   fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
    //   stroke: '#000000', strokeThickness: 8,
    //   align: 'center'
    // }).setOrigin(0.5).setDepth(100);

  }

  update() {
    this.player.update()
  }
    
}
