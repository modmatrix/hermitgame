import { Scene } from 'phaser'
import Player from '../Player'

export default class Garden extends Scene {

  camera: Phaser.Cameras.Scene2D.Camera

  constructor () {
    super('Garden')
  }

  preload() {
    this.load.audio('shadows', 'assets/music/shadows.mp3');
    this.load.tilemapTiledJSON('garden-map', 'assets/maps/garden.json');
  }

  create() {

    this.camera = this.cameras.main
    this.camera.setBackgroundColor(0x72751b)

    this.createMap()

    this.player = new Player(this, 100, 200)
    this.camera.startFollow(this.player)

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

  createMap() {

    this.tileMap = this.make.tilemap({
      key: 'garden-map',
      tileWidth: 32,
      tileHeight: 32,
    })

    this.tileSetBg = this.tileMap.addTilesetImage('grass-spritesheet')

    this.tileMap.createLayer('background', this.tileSetBg);

    /*
    this.tileSet = this.tileMap.addTilesetImage("softbricks");

    this.platform = this.tileMap.createLayer(
    "scene" + this.number,
    this.tileSet
    );

    this.objectsLayer = this.tileMap.getObjectLayer("objects");
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

  update() {
    this.player.update()
  }
    
}
