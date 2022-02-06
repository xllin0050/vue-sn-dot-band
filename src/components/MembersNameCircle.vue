<template>
  <section class="relative">
    <svg width="500" height="500" viewBox="0 0 500 500" class="w-full">
      <defs>
        <path
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
          id="textcircle"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="90s"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            repeatCount="indefinite"
          />
        </path>
      </defs>

      <text class="font-redhat text-2xl font-medium uppercase">
        <textPath
          xlink:href="#textcircle"
          textLength="290"
          :fill="'weiting' === backgroundName ? '' : 'lightgray'"
        >
          Weiting(bass)
        </textPath>
        <textPath
          xlink:href="#textcircle"
          startOffset="820"
          textLength="250"
          :fill="'yau' === backgroundName ? '' : 'lightgray'"
        >
          Yau(gtr/vox)
        </textPath>
        <textPath
          xlink:href="#textcircle"
          startOffset="440"
          textLength="200"
          :fill="'shih' === backgroundName ? '' : 'lightgray'"
        >
          Shih(drum)
        </textPath>
      </text>
    </svg>
    <div
      v-for="name in membersName"
      :key="name"
      class="membersPhoto absolute aspect-square w-80 -translate-x-1/2 rounded-full"
      :class="name"
      v-show="name === backgroundName"
    ></div>
  </section>
</template>

<script>
import { ref, onUnmounted } from 'vue'
export default {
  setup(props) {
    const membersName = ['shih', 'yau', 'weiting']
    let nameIndex = 0
    let backgroundName = ref('yau')

    const changeNameTimer = setInterval(() => {
      nameIndex++
      if (nameIndex === 3) nameIndex = 0
      backgroundName.value = membersName[nameIndex]
    }, 1000 * 7)
    onUnmounted(() => {
      clearInterval(changeNameTimer)
    })
    return { membersName, backgroundName }
  },
}
</script>
<style scoped>
.membersPhoto {
  animation: circleRun 8s linear infinite;
}
.shih {
  background: url('../assets/images/members/shih.jpg');
  background-size: cover;
  background-position: center;
}
.yau {
  background: url('../assets/images/members/yau.jpg');
  background-size: cover;
  background-position: left;
}
.weiting {
  background: url('../assets/images/members/weiting.jpg');
  background-size: cover;
  background-position: left;
}
@keyframes circleRun {
  0% {
    top: 5.5em;
    left: 50%;
  }
  15% {
    top: 4.5em;
    left: 49%;
  }
  30% {
    top: 5.5em;
    left: 50%;
  }
  45% {
    top: 6.5em;
    left: 49%;
  }
  65% {
    top: 5.5em;
    left: 50%;
  }
  85% {
    top: 4.5em;
    left: 51%;
  }
  100% {
    top: 5.5em;
    left: 50%;
  }
}
</style>
