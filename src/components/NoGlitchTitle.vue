<template>
  <div class="flex w-full items-center justify-center pt-8 sm:pt-16">
    <div
      class="tracking-[.2em] sm:tracking-[.3em] font-redhat text-3xl font-medium uppercase sm:text-7xl"
    >
      super napkin
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
