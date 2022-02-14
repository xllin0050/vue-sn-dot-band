<template>
    <footer class="w-full py-8 font-redhat font-medium uppercase">
        <ul class="mx-auto flex max-w-sm items-center justify-center">
            <li v-for="(link, key) in links" :key="key">
                <a :href="link[0]" target="_blank" :aria-label="link[2]">
                    <span
                        class="iconify mx-3 text-2xl sm:text-3xl"
                        :data-icon="link[1]"
                    ></span>
                </a>
            </li>
        </ul>
        <div class="flex items-center justify-center pt-4">
            <span class="iconify text-lg" data-icon="uil:copyright"></span
            >{{ thisYear }} Super Napkin
        </div>
    </footer>
</template>
<script>
export default {
    setup() {
        const thisYear = new Date().getFullYear()

        const links = [
            [
                'mailto:supernapkinsogood@gmail.com',
                'ic:round-mail-outline',
                'mail',
            ],
            [
                'https://www.facebook.com/SuperNapkin/',
                'ic:outline-facebook',
                'facebook',
            ],
            [
                'https://www.instagram.com/super_napkin/',
                'ph:instagram-logo',
                'instagram',
            ],
        ]
        return { links, thisYear }
    },
}
</script>
