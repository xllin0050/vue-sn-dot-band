<template>
    <div class="mx-auto max-w-4xl py-8 lg:py-12">
        <h3
            class="pb-4 text-center font-redhat text-xl font-medium uppercase tracking-widest text-gray-800 lg:text-3xl"
        >
            albums
        </h3>
        <div
            v-for="album in props.albums"
            :key="album.created_at"
            class="pb-12"
        >
            <h5
                class="py-3 text-center font-redhat text-sm font-medium uppercase text-gray-800 lg:text-xl lg:font-normal"
            >
                {{ album.title }}
            </h5>
            <div class="mx-auto max-w-[75%] lg:max-w-sm">
                <router-link :to="`/album/${album.release}/${album.url}`">
                    <img
                        :src="album.cover"
                        :alt="album.title"
                        class="mx-auto block aspect-square w-full object-cover shadow-xl"
                    />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: { albums: Array },
    setup(props) {
        return { props }
    },
}
</script>
