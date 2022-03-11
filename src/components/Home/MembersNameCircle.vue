<template>
    <div class="relative my-0 pb-4 lg:my-4 lg:pb-0">
        <svg
            viewBox="0 0 500 500"
            class="invisible h-[300px] lg:visible lg:h-[500px] lg:w-full"
        >
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
            <text
                class="block font-redhat text-2xl font-medium uppercase dark:hidden"
            >
                <textPath
                    xlink:href="#textcircle"
                    textLength="290"
                    :fill="'weiting' === backgroundName ? '#404040' : '#E5E5E5'"
                >
                    Weiting(bass)
                </textPath>
                <textPath
                    xlink:href="#textcircle"
                    startOffset="820"
                    textLength="250"
                    :fill="'yau' === backgroundName ? '#404040' : '#E5E5E5'"
                >
                    Yau(gtr/vox)
                </textPath>
                <textPath
                    xlink:href="#textcircle"
                    startOffset="440"
                    textLength="200"
                    :fill="'shih' === backgroundName ? '#404040' : '#E5E5E5'"
                >
                    Shih(drum)
                </textPath>
            </text>
            <text
                class="hidden font-redhat text-2xl font-medium uppercase dark:block"
            >
                <textPath
                    xlink:href="#textcircle"
                    textLength="290"
                    :fill="'weiting' === backgroundName ? '#E9D5FF' : '#525252'"
                >
                    Weiting(bass)
                </textPath>
                <textPath
                    xlink:href="#textcircle"
                    startOffset="820"
                    textLength="250"
                    :fill="'yau' === backgroundName ? '#E9D5FF' : '#525252'"
                >
                    Yau(gtr/vox)
                </textPath>
                <textPath
                    xlink:href="#textcircle"
                    startOffset="440"
                    textLength="200"
                    :fill="'shih' === backgroundName ? '#E9D5FF' : '#525252'"
                >
                    Shih(drum)
                </textPath>
            </text>
        </svg>
        <transition-group name="fade">
            <div
                v-for="name in membersName"
                :key="name"
                class="membersPhoto absolute aspect-square w-60 -translate-x-1/2 -translate-y-10 rounded-full shadow-lg lg:w-80 lg:-translate-y-0"
                :class="name"
                v-show="name === backgroundName"
            >
                <div
                    class="visible absolute bottom-4 w-full text-center uppercase tracking-widest text-white lg:invisible"
                >
                    {{ name }}
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'
export default {
    setup() {
        const membersName = ['shih', 'yau', 'weiting']
        let nameIndex = 0
        let backgroundName = ref('yau')

        const changeNameTimer = setInterval(() => {
            nameIndex++
            if (nameIndex === 3) nameIndex = 0
            backgroundName.value = membersName[nameIndex]
        }, 1000 * 7)
        onBeforeUnmount(() => {
            clearInterval(changeNameTimer)
        })
        return { membersName, backgroundName }
    },
}
</script>
<style scoped>
.membersPhoto {
    animation: circleRun 1s linear infinite;
    animation-play-state: paused;
}
@media (min-width: 1024px) {
    .membersPhoto {
        animation: circleRun 8s linear infinite;
        /* animation-play-state: running; */
    }
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
