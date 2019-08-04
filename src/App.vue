<template>
  <mp3-player/>
</template>

<script lang="ts">
import Vue from 'vue'
import Mp3Player from './components/Mp3Player.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Mp3Player
  },
  data: () => ({
    //
  })
})
</script>
<style lang="sass">
body
  width: 100vw
  height: 100vh
</style>
