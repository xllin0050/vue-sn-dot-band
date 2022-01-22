<template>
  <canvas ref="canvas" class="fixed top-0 left-0 w-full h-screen opacity-5 pointer-events-none z-0"></canvas>
</template>
<script>
export default {
  data() {
    return {
      noise: null,
    }
  },
  mounted() {
    this.$refs.canvas.height = window.innerHeight
    this.$refs.canvas.width = window.innerWidth
    this.generateNoise()
    requestAnimationFrame(this.moveNoise)
  },
  methods: {
    generateNoise() {
      this.noise = document.createElement("canvas")
      this.noise.height = window.innerHeight * 2
      this.noise.width = window.innerWidth * 2
      let noiseContext = this.noise.getContext("2d")
      let noiseData = noiseContext.createImageData(
        this.noise.width,
        this.noise.height
      )
      let buffer32 = new Uint32Array(noiseData.data.buffer)
      let len = buffer32.length - 1
      while (len--) {
        buffer32[len] = Math.random() < 0.5 ? 0 : -1 >> 0
      }
      noiseContext.putImageData(noiseData, 0, 0)
    },
    moveNoise() {
      let canvas = this.$refs.canvas
      let context = canvas.getContext("2d")
      let x = Math.random() * canvas.width
      let y = Math.random() * canvas.height
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(this.noise, -x, -y)
      requestAnimationFrame(this.moveNoise)
    },
  },
}
</script>
