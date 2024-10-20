import { Scene } from 'phaser'
import Player from '../Player'

import Bush from '../objects/Bush'

export default class Garden extends Scene {

  camera: Phaser.Cameras.Scene2D.Camera

  constructor () {
    super('Garden')
  }

  preload() {
    this.load.audio('shadows', 'assets/music/shadows.mp3');

    this.load.image('glade_ground_spritemap', 'assets/maps/tilesets/glade/ground/glade_ground.png')
    this.load.tilemapTiledJSON('garden-map', 'assets/maps/garden/garden.tmj')
  }

  create() {

    this.camera = this.cameras.main
    this.camera.setBackgroundColor(0x72751b)


    this.createMap()

    this.player = new Player(this, 240, 300)
    this.camera.startFollow(this.player)

    this.groups = {
      solid: this.physics.add.staticGroup(),
    }

    // this.groups.solid.create(1100, 1100, 'star')

    // this.addObjects()

    this.physics.add.collider(this.player, this.groups.solid, () => null, () => true, this)

    // https://stackoverflow.com/questions/34214162/creating-a-collision-layer-in-phaser-using-json-and-tiled
    // Set collision with player (can also be a group)
    this.obstacleLayer.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player, this.obstacleLayer);

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

  createMap() {

    this.tileMap = this.make.tilemap({
      key: 'garden-map',
      tileWidth: 32,
      tileHeight: 32,
    })

    const gladeGroundTileSet = this.tileMap.addTilesetImage('glade_ground', 'glade_ground_spritemap')

    this.tileMap.createLayer('base', gladeGroundTileSet)
    this.tileMap.createLayer('grass', gladeGroundTileSet)
    this.obstacleLayer = this.tileMap.createLayer('obstacles', gladeGroundTileSet)

    // https://rexrainbow.github.io/phaser3-rex-notes/docs/site/tilemap/#collision
    // this.tileMap.setCollisionByProperty({key:value});

    this.physics.world.setBounds(0, 0, this.tileMap.widthInPixels, this.tileMap.heightInPixels)

    // this.objectsLayer = this.tileMap.getObjectLayer('objects')

    /*
    this.tileSet = this.tileMap.addTilesetImage("softbricks");

    this.platform = this.tileMap.createLayer(
    "scene" + this.number,
    this.tileSet
    );

    this.platform.setCollisionByExclusion([-1]);
    this.batGroup = this.add.group();
    this.zombieGroup = this.add.group();
    this.foesGroup = this.add.group();
    this.turnGroup = this.add.group();
    this.exitGroup = this.add.group();
    this.platformGroup = this.add.group();
    this.lunchBoxGroup = this.add.group();
    this.bricks = this.add.group();
    this.addsObjects();
    this.addColliders();
    */

  }

  addObjects() {
    
    this.objectsLayer.objects.forEach((object) => {

      if (object.name === 'bush') {
        // let bush = new Bush(this, object.x, object.y)
        // this.groups.solid.add(bush)
        this.groups.solid.create(object.x, object.y, 'bush')
      }

    })

  }

  update() {
    this.player.update()
  }
    
}
