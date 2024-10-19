import { Scene } from 'phaser'

export default class Preloader extends Scene {

  constructor () {
    super('Preloader');
  }

  preload () {

    this.createBars()
    this.setLoadEvents()
    this.loadImages()

  }

  createBars() {

    this.loadBar = this.add.graphics()
    this.loadBar.fillStyle(0xd40000, 1)
    this.loadBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4, 20
    )
    this.progressBar = this.add.graphics()
  }  

  setLoadEvents() {

    this.load.on('progress', function (value) {
        this.progressBar.clear()
        this.progressBar.fillStyle(0x0088aa, 1)
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        )
      },
      this
    )

    this.load.on('complete', () => {
      this.scene.start('MainMenu');
    }, this)

  }

  loadImages() {

    this.load.spritesheet('hermit', 'assets/dude.png', {
      frameWidth: 32, frameHeight: 48
    })

    this.load.spritesheet('grass-spritesheet', 'assets/grass-spritesheet.png', {
      frameWidth: 32,
      frameHeight: 32,
    })

    this.load.image('main-menu-bg', 'assets/main-menu-bg.png')
    this.load.image('star', 'assets/star.png')

  }

}
