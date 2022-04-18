<template>
  <div class="relative my-0 h-[380px] w-full pb-0 lg:h-[510px]">
    <div class="z-0 hidden lg:flex lg:items-center lg:justify-center lg:pt-4">
      <div
        class="relative block h-[480px] w-[480px] rounded-full font-redhat text-xl font-medium"
      >
        <p
          ref="shihDrum"
          class="nameText"
          :class="
            backgroundName === 'shih'
              ? 'text-neutral-700 dark:text-purple-200'
              : 'text-neutral-200 dark:text-neutral-600'
          "
        >
          shih(drum)
        </p>
        <p
          ref="yauGtr"
          class="nameText"
          :class="
            backgroundName === 'yau'
              ? 'text-neutral-700 dark:text-purple-200'
              : 'text-neutral-200 dark:text-neutral-600'
          "
        >
          yau(gtr/vox)
        </p>
        <p
          ref="weitingBass"
          class="nameText"
          :class="
            backgroundName === 'weiting'
              ? 'text-neutral-700 dark:text-purple-200'
              : 'text-neutral-200 dark:text-neutral-600'
          "
        >
          weiting(bass)
        </p>
      </div>
    </div>

    <div
      v-for="name in membersName"
      :key="name"
      class="absolute top-1/2 left-1/2 z-10 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg lg:h-80 lg:w-80"
      :class="[name, name === backgroundName ? 'opacity-100' : 'opacity-0']"
    >
      <div
        class="absolute bottom-4 z-20 w-full text-center uppercase tracking-widest text-white opacity-100 lg:opacity-0"
      >
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const shihDrum = ref(null)
const yauGtr = ref(null)
const weitingBass = ref(null)

onMounted(() => {
  const nameCircle = (nameText, position) => {
    nameText.value.innerHTML = nameText.value.innerText
      .split('')
      .map(
        (char, i) =>
          `<span style="transform:rotate(${
            (i + position) * 8
          }deg)">${char}</span>`
      )
      .join('')
  }
  nameCircle(shihDrum, 15)
  nameCircle(yauGtr, 0)
  nameCircle(weitingBass, 28)
})

const membersName = ['shih', 'yau', 'weiting']
let nameIndex = 0
let backgroundName = ref('yau')

const changeNameTimer = setInterval(() => {
  nameIndex++
  if (nameIndex === 3) nameIndex = 0
  backgroundName.value = membersName[nameIndex]
}, 1000 * 4)
onBeforeUnmount(() => {
  clearInterval(changeNameTimer)
})
</script>

<style>
@keyframes rotateText {
  0% {
    transform: rotate(360deg);
  }
}
.nameText {
  position: absolute;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  animation: rotateText 24s linear infinite;
}
.nameText span {
  position: absolute;
  left: 50%;
  transform-origin: 0 240px;
}
.shih {
  background: url('@/assets/images/members/shih.jpg');
  background-size: cover;
  background-position: center;
}
.yau {
  background: url('@/assets/images/members/yau.jpg');
  background-size: cover;
  background-position: left;
}
.weiting {
  background: url('@/assets/images/members/weiting.jpg');
  background-size: cover;
  background-position: left;
}
</style>
