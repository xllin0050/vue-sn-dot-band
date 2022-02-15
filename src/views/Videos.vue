<template>
    <div class="min-h-screen w-full pb-16">
        <PageTitle></PageTitle>
        <h2
            class="pt-4 text-center font-redhat text-lg font-medium uppercase text-gray-500 lg:pt-8 lg:text-xl"
        >
            videos
        </h2>
        <div v-for="(url, i) in urls" :key="i" class="py-8 lg:py-12">
            <div
                class="mx-auto max-w-screen-sm border-2 border-gray-300 p-1 shadow-md"
            >
                <iframe
                    style="width: 100%; aspect-ratio: 16 / 9"
                    :src="url"
                    title="Super Napkin Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>
<script>
const urls = [
    'https://www.youtube.com/embed/HhBR0t9zyAY',
    'https://www.youtube.com/embed/mfFnPvhy-GE',
    'https://www.youtube.com/embed/EdBtZZiCC38',
    'https://www.youtube.com/embed/uoLYfKt-l38',
]
export default {
    name: 'VideosPage',
    setup(props) {
        return { urls }
    },
}
</script>
