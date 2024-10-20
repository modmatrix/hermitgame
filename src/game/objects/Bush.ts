import { GameObjects, Physics } from 'phaser'

export default class Bush extends Physics.Arcade.Sprite {
// export default class Bush extends GameObjects.Sprite {

  constructor(scene, x, y) {

    super(scene, x, y, 'bush')
    
    this.name = 'bush'

    this.scene.physics.add.existing(this)
    this.scene.physics.world.enable(this)
    // this.body.setAllowGravity(false)
    this.scene.add.existing(this)

    this.init()

  }

  init() {

    this.scene.anims.create({
      key: this.name,
      frames: this.scene.anims.generateFrameNumbers(this.name, {
        start: 0,
        end: 0,
      }),
      frameRate: 1
    })

    this.anims.play(this.name, true)

  }

  update() {

  }

}
