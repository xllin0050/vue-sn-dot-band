<template>
  <div class="relative my-0 h-[380px] w-full pb-0 lg:h-[675px] pointer-events-none">
    <div class="hidden w-full lg:flex lg:items-center lg:justify-center">
      <div
        class="relative block h-[550px] w-[550px] rounded-full font-redhat text-xl font-medium translate-y-16"
      >
        <p
          ref="shihDrum"
          class="nameText"
          :class="
            backgroundName === 'shih'
              ? 'text-neutral-700 '
              : 'text-neutral-200 '
          "
        >
          shih(drum)
        </p>
        <p
          ref="yauGtr"
          class="nameText"
          :class="
            backgroundName === 'yau' ? 'text-neutral-700 ' : 'text-neutral-200 '
          "
        >
          yau(gtr/vox)
        </p>
        <p
          ref="weitingBass"
          class="nameText"
          :class="
            backgroundName === 'weiting'
              ? 'text-neutral-700 '
              : 'text-neutral-200 '
          "
        >
          weiting(bass)
        </p>
      </div>
    </div>

    <div
      v-for="name in membersName"
      :key="name"
      class="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg lg:h-[380px] lg:w-[380px]"
      :class="[name, name === backgroundName ? 'opacity-100' : 'opacity-0']"
    >
      <div
        class="absolute bottom-4 w-full text-center uppercase tracking-widest text-neutral-50 opacity-100 lg:opacity-0"
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
}, 1000 * 6)
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
  transform-origin: 0 275px;
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
