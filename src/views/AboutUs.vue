<template>
    <div class="w-full">
        <PageTitle>about us</PageTitle>
        <article
            class="mx-auto max-w-2xl break-all pt-2 text-left font-redhat text-sm font-normal leading-relaxed text-gray-700 sm:break-words sm:pt-0 sm:text-justify sm:text-base"
        >
            <p class="paragraph">
                Super Napkin is a fuzz-pop trio hailing from Taiwan. Feeling
                that their original name, “Super Nap Kid”, was a bit tired, they
                switched to “Super Napkin” in honor of their favorite superhero,
                Napkin Man, who zooms across the universe drying the tears of
                thesad and heartbroken. (In a pinch, he can also sop up your
                spilled milk.)
            </p>
            <p class="paragraph">
                The project was conceived as a portrait of an artist beginning
                to grow old. It is veteran singer-songwriter-guitarist Matt
                Yau’s first stab at making music post-marriage (hint: it helps
                if your wife can play bass) and it has gifted him one more
                opportunity to revel in his roots.
            </p>
            <p class="paragraph">
                Roots. As an 80’s kid born in the Taipei Basin, the drone of
                distant motorbikes and the soothing sounds of humming air
                conditioners comprised Yau’s early childhood ‘soundtrack’. So
                when he came of age in the Soulseek 56k baud modem era, it made
                perfect sense for him to fall right the fuck in love with the
                equally droney sounds of Yo La Tengo, Sonic Youth, Eric's Trip,
                The Microphones, and My Bloody Valentine.
            </p>
            <p class="paragraph">
                Yau and his wife Weiting, who was still paying installments on
                her first bass when she joined the band, and drummer Shih, who
                proved his fit by seamlessly filling in on drums for a show with
                Yau’s previous band (the grungy local legends Slack Tide), have
                together produced three full-length records, each oozing 90s
                nostalgia.
            </p>
            <p class="paragraph">
                Both Rhythmic Lizard Moon in 2016 and Diamond Shaped Hearts in
                2018 saw the band channeling their inner DIY lo-fi ethos, serve
                up some scorching guitar tones --the type that could makethe
                hair on J. Mascis’s back stand on-end --atop a bed of powerful,
                precise drumming and steady-as-she-goes bass riffs.
            </p>
            <p class="paragraph">
                2020’s release, There’s Nothing That Cannot Beat Me, sees the
                band taking a step toward more refined aesthetics and bolder
                sonics --asound that roughly approximates the grandeur of their
                live shows, an intoxicating mix of delicately layered
                psychedelic guitars within which rambunctious raw noise moments
                bubble up to the surface.
            </p>
        </article>
        <div class="mx-auto max-w-2xl pt-12">
            <img :src="imgUrl" alt="About Us" class="block w-full" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutPage',
    setup(props) {
        const imgUrl = new URL('../assets/images/about-us.jpg', import.meta.url)
            .href
        return { imgUrl }
    },
}
</script>
<style scoped>
.paragraph {
    @apply py-4;
}
</style>
