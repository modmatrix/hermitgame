import { Scene } from 'phaser'

export default class Preloader extends Scene {

  constructor () {
    super('Preloader');
  }

  preload () {

    this.load.spritesheet('hermit', 'assets/dude.png', {
      frameWidth: 32, frameHeight: 48
    })

    this.load.image('main-menu-bg', 'assets/main-menu-bg.png')
    this.load.image('star', 'assets/star.png')

  }

  create () {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start('MainMenu')
    
  }

}
