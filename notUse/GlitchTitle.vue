<template>
  <div
    class="
      w-full
      flex
      sm:flex-col
      justify-center
      items-center
      pt-24
      sm:pt-16
      mb-8
      sm:mb-0
    "
  >
    <div
      class="
        relative
        text-3xl
        sm:text-7xl
        text-gray-300
        uppercase
        text-shadow-GLITCH
        tracking-0.2em
        sm:tracking-0.4em
        mr-4
        sm:mr-0
        sm:ml-2
        wordsAnimation
      "
    >
      <span
        aria-hidden="true"
        class="absolute top-0 left-0 wordsAnimationLayerOne"
        >super</span
      >
      super
      <span
        aria-hidden="true"
        class="absolute top-0 left-0 wordsAnimationLayerTwo"
        >super</span
      >
    </div>
    <div
      class="
        relative
        text-3xl
        sm:text-7xl
        text-gray-300
        uppercase
        text-shadow-GLITCH
        tracking-0.2em
        wordsAnimation
      "
    >
      <span
        aria-hidden="true"
        class="absolute top-0 left-0 wordsAnimationLayerOne"
        >napk<span class="sm:italic sm:mr-3">i</span>n</span
      >
      napk<span class="sm:italic sm:mr-3">i</span>n
      <span
        aria-hidden="true"
        class="absolute top-0 left-0 wordsAnimationLayerTwo"
        >napk<span class="sm:italic sm:mr-3">i</span>n</span
      >
    </div>
  </div>
</template>
<style>
:root {
  --color-glitch-1: rgb(238, 119, 83);
  --color-glitch-2: rgba(35, 213, 171, 0.8);
  --color-glitch-3: rgba(35, 166, 213, 0.3);
}
.wordsAnimation {
  animation: glitch 500ms infinite;
}
.wordsAnimationLayerOne {
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  opacity: 0.8;
}
.wordsAnimationLayerTwo {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  opacity: 0.8;
}
@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 var(--color-glitch-1),
      -0.05em -0.025em 0 var(--color-glitch-2),
      -0.025em 0.05em 0 var(--color-glitch-3);
  }
  14% {
    text-shadow: 0.05em 0 0 var(--color-glitch-1),
      -0.05em -0.025em 0 var(--color-glitch-2),
      -0.025em 0.05em 0 var(--color-glitch-3);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 var(--color-glitch-1),
      0.025em 0.025em 0 var(--color-glitch-2),
      -0.05em -0.05em 0 var(--color-glitch-3);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 var(--color-glitch-1),
      0.025em 0.025em 0 var(--color-glitch-2),
      -0.05em -0.05em 0 var(--color-glitch-3);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 var(--color-glitch-1),
      0.05em 0 0 var(--color-glitch-2), 0 -0.05em 0 var(--color-glitch-3);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 var(--color-glitch-1),
      0.05em 0 0 var(--color-glitch-2), 0 -0.05em 0 var(--color-glitch-3);
  }
  100% {
    text-shadow: -0.025em 0 0 var(--color-glitch-1),
      -0.025em -0.025em 0 var(--color-glitch-2),
      -0.025em -0.05em 0 var(--color-glitch-3);
  }
}
</style>
