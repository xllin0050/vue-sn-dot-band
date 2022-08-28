<template>
  <SiteNavbar />
  <PageTitle>about us</PageTitle>
  <div id="banner" class="mt-10 w-[100vw] bg-black px-4 lg:mt-0 lg:px-0">
    <img
      :src="imgUrl"
      alt="About Us"
      class="mx-auto object-contain"
      :style="`height: ${imgHeight}px`"
    />
  </div>

  <div class="relative mx-auto mt-8 max-w-2xl lg:mt-14">
    <LangSwitch class="pl-8" />
    <article v-show="userLang === 'zh'" class="article">
      <p class="paragraph">
        Super Napkin 是個所有事都要有點不可理喻的樂團，但僅限有點。
      </p>
      <p class="paragraph">
        73
        年次的吉他手小帕熱愛諧音笑話，中英不拘，夾雜更棒。據悉，他組團唯一的原則，只有英文團名要以「S」開頭，以期來日國際走紅之時，專輯會與音速青春
        Sonic Youth、音爆樂團 Sonic Boom 以及夏奇拉 Shakira
        擺在同一貨架上。為一償宿願，正與時間賽跑，希望能在最後一間實體店面消失前發跡。
      </p>
      <p class="paragraph">
        超級紙巾 Super Napkin
        是他第三次的組團嘗試，同時也是歷來最不可理喻的團名。他希望過世後如果有墓碑的話，可以大大地刻上超級紙巾，不過切結書上寫著希望樹葬。
      </p>
      <p class="paragraph">
        鼓手施霖，英文名 Steve Shih，因為有兩個 S
        所以被選中，肌肉富有音樂性也是一大考量。貝斯手黃尾熱愛
        Excel，原訂要擔任樂團經理的她，因為發現貝斯看起來像實體化的 Excel
        欄列，不知不覺也開始負責起樂團的低頻。
      </p>
      <p class="paragraph">
        2014
        成團，八年來他們已推出了五張專輯。為了要解釋超級紙巾這個團名，也編造了不少故事。其中一則，是關於一個叫紙巾人的超級英雄的故事。紙巾人可以穿越宇宙，為傷心的人拭淚，為打翻牛奶的人清地板，儼然是來自台灣的聖誕老人。
      </p>
      <p class="paragraph">
        如果你喜歡表面未經光滑處理，品質優良的面紙，請指名超級紙巾 Super
        Napkin，擦你心靈的屁股。
      </p>
    </article>
    <article v-show="userLang === 'en'" class="article">
      <p class="paragraph">
        Super Napkin is a band that does everything ridiculously, and only to a
        slight degree.
      </p>
      <p class="paragraph">
        Yau (he/him/founding fuzzgod) is obsessed with bad puns. His life goal
        is to have a successful band that starts with ‘S’ in its name. He wants
        to have his band’s records stocked on the shelf next to Sonic Youth,
        Sonic Boom, and Shakira. Super Napkin is his third band with this naming
        convention. As the most ridiculous name out of the three, Yau intends to
        go to his grave with this one.
      </p>
      <p class="paragraph">
        Steve Shih (he/him/drumming muscles) is the drummer of Super Napkin. He
        was drafted because both his family name and first name start with 'S',
        and because he has immensely musical muscles.
      </p>
      <p class="paragraph">
        Weiting (she/her/the bass boss) loves Excel, the spreadsheeting
        software. When Yau and Steve asked her to be the band manager, they
        forgot to send in the request in a .csv format. Due to file format
        incompatibility, she ended up handling the band’s dirty low end instead.
      </p>
      <p class="paragraph">
        Together, they've made five albums over eight years. Their sound is
        exactly what the term “Super Napkin” conjures in your head. You should
        be thinking of the band’s favorite superhero, Napkin Man, as he zooms
        across the universe drying the tears of the sad and heartbroken. He is
        the Taiwanese Santa Claus bringing you gifts to mend your broken soul.
        Sometimes, he will bring you a glass of milk. He will even mop up the
        spilled milk when you blubber in sadness. He will wrap you up in a warm
        fuzzy coat made up of pure goodness, and grease your bowels to release
        the sadness in your depths. Then he will offer you a Super Napkin to
        wipe your metaphoric ass with.
      </p>
    </article>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { storeUserLang } from '@/stores/lang'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const imgHeight = computed(() => (width.value / 2048) * 1152)

const store = storeUserLang()

const userLang = computed(() => store.lang)

const imgUrl = new URL('../assets/images/band-image-2022.jpg', import.meta.url)
  .href

// 
</script>
<style scoped>
.paragraph {
  @apply px-8 py-4;
}
.article {
  @apply pt-2 font-redhat text-sm font-normal leading-relaxed text-neutral-700  sm:pt-0 sm:text-base;
}
</style>
