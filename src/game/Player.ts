import { GameObjects } from 'phaser'

export default class Player extends GameObjects.Sprite {

  constructor(scene, x, y) {

    super(scene, x, y, 'hermit')

    this.createAnimations()
    this.createControls()

    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.setCollideWorldBounds(true)

  }

  createAnimations() {

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hermit', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'hermit', frame: 4 } ],
      frameRate: 20
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hermit', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })

  }

  createControls() {

    this.cursors = this.scene.input.keyboard.createCursorKeys()

    // this.W = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    // this.A = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    // this.S = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    // this.D = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

  }

  update() {

    this.updateMovement()

  }

  updateMovement() {

    let horizontalDirection = null

    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-160)
      horizontalDirection = 'left'
    } else if (this.cursors.right.isDown) {    
      this.body.setVelocityX(160)
      horizontalDirection = 'right'
    } else {
      this.body.setVelocityX(0)
    }

    if (this.cursors.up.isDown) {
      this.body.setVelocityY(-160)
    } else if (this.cursors.down.isDown) {
      this.body.setVelocityY(160)
    } else {
      this.body.setVelocityY(0)
    }

    if (horizontalDirection === 'left') {
      this.anims.play('left', true)
    } else if (horizontalDirection === 'right') {
      this.anims.play('right', true)
    } else {
      this.anims.play('turn', true)      
    }

  }

}
