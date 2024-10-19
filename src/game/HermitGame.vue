<template>

  <div id="game-container"></div>

</template>

<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue'

// Phaser
import { AUTO, Game } from 'phaser'

// scenes
import Boot from './scenes/Boot'
import Preloader from './scenes/Preloader'
import Garden from './scenes/Garden'
import MainMenu from './scenes/MainMenu'

const game = ref()

onMounted(() => {

  game.value = new Game({
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: 0
      },
    },
    scene: [
      Boot,
      Preloader,
      MainMenu,
      Garden,
    ],
  })

})

onUnmounted(() => {

  if (game.value) {
    game.value.destroy(true)
    game.value = null
  }

})

</script>
