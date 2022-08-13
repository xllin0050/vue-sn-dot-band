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
      <!-- <p class="paragraph">
          Super Napkin
          沿用多年的樂團介紹，僅短短寫著「如果要構思一個超級英雄的故事，我想寫一個叫做紙巾人的角色，能力是好好地聽每個心靈受傷的人說話，陪著他們將傷口上的污垢和血淚都擦拭乾淨。每個人都需要這樣的英雄」，而他們的音樂，則是最適合紙巾人的主題曲。
        </p> -->
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
      <!-- <p class="paragraph">
          2020’s release, There’s Nothing That Cannot Beat Me, sees the band
          taking a step toward more refined aesthetics and older sonics --asound
          that roughly approximates the grandeur of their live shows, an
          intoxicating mix of delicately layered psychedelic guitars within which
          rambunctious raw noise moments bubble up to the surface.
        </p> -->
    </article>
  </div>
  <!-- <div class="mx-auto max-w-2xl px-4">
    <div v-for="comment in comments[userLang]" :key="comment.person">
      <div
        class="card-shadow my-20 rounded p-8 font-redhat text-xs lg:my-40 lg:text-sm"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div class="pb-10 underline underline-offset-8">
          {{ comment.subject }}
        </div>
        <div class="pb-4">{{ comment.person }}:</div>
        <p
          v-for="(words, i) in comment.content"
          :key="i"
          class="text-justify leading-loose lg:leading-relaxed"
        >
          {{ words }}
        </p>
      </div>
    </div>
  </div> -->
</template>
<script setup>
import { computed, reactive, onMounted } from 'vue'
import { storeUserLang } from '@/stores/lang'
import { useWindowSize } from '@vueuse/core'
import AOS from 'aos'
const { width } = useWindowSize()

const imgHeight = computed(() => (width.value / 2048) * 1152)

const store = storeUserLang()

const userLang = computed(() => store.lang)

const imgUrl = new URL('../assets/images/band-image-2022.jpg', import.meta.url)
  .href

const comments = reactive({
  zh: [
    {
      subject: '亞熱帶噴射氣流 (Subtropical Jet Stream, 2022)',
      person: '在 Revolver 遇到的台灣大學社會學系輟學生',
      content: [
        '這張專輯令我反胃。刻意挪用專有名詞去形容自己不知所謂的作品，還偷換概念，捏造出似是而非的文化意義，實質上只是模糊焦點的宣傳、媚眾，隱藏實質藝術性不足的本質。什麼叫做一股從歐美來的搖滾能量，經過台灣的時空背景後，重新西向？這種建立在民族主義，將脈絡簡略到哄小孩的狗屁敘述，根本是漠視當代數十年的後殖民主義、去帝國主義的論述。',
        '不要以為用這種民族中心的話術吸引群眾，就是在建立次文化。你根本沒有核心價值。你還在那邊串流、實體發行，就代表你只是消費主義的奴隸。你真的想要用音樂內含的理念對社會做出改變的話，應該要免費提供音樂，讓理念更易於散佈吧？而且講那麼多你歌詞內容跟一般華語抒情流行樂真的有差嗎？Pitchfork (音叉) 連 0.0 分都懶得給你，除非他們改名叫 Pitchchopstick (音筷)。',
      ],
    },
    {
      subject: '雪莉的鄰居 (Sherry’s Neighbors, 2022)',
      person: '十幾年前曾和小帕同台的吉他手，目前兩個小孩，沒有樂團',
      content: [
        '我覺得這一定是小帕又在用很膚淺的方式抄襲 Yo La Tengo，看到他們找 Jad Fair 合作就硬說自己找 Sherry 合作，我猜這個 Sherry 也不是真有其人。真不要臉。',
      ],
    },
    {
      subject: '沒有打不倒我的東西 (There’s Nothing That Cannot Beat Me, 2020)',
      person: '來自亞利桑那州的馬刺球迷',
      content: [
        '超級紙巾第三張作品「沒有打不倒我的東西」，在帶來更細緻的旋律轉折同時，也展現了更大膽有趣的聲音嘗試，可說是他們現場演出的精煉版本。巧妙疊加的迷幻吉他及往天際線奔去的節奏，如同一輛在異星球上兜風的檔車。',
      ],
    },
    {
      subject: '鑽石心 (Diamond Shaped Hearts, 2018)',
      person: '小帕的同事',
      content: [
        '秉持著一貫的 DIY 低傳真精神，超級紙巾在精準的鼓擊與如同長跑般的貝斯行進上，炙燒出一片吉他破音，香味逼人，連小恐龍的吉他手 J Mascis 都會食指大動。',
      ],
    },
    {
      subject: '節奏的蜥蜴之月 (Rhythmic Lizard Moon, 2016)',
      person: 'YouTube 用戶 Cat_Cat',
      content: [
        '殘響、循環延音、無盡的吉他樂段，超級紙巾或許會給人仿效瞪鞋樂團、抄襲 Yo La Tengo 的第一印象，但是他們可不止如此。除了從瞪鞋的迷幻元素中開發出新聲響外，他們的歌曲本身毫不保留的誠實講述著各種心碎故事，核心上更接近著龐克樂隊，而非譁眾取寵的文青瞪鞋。',
      ],
    },
  ],
  en: [
    {
      subject: 'Subtropical Jet Stream (2022)',
      person:
        'National Taiwan University Department of Sociology dropout at Revolver bar',
      content: [
        'You cannot twist the meaning of a scientific term to describe how you want your music to sound like, or what you want your band to represent. What does this magnificent westwarding force originating from the US across the Pacific to Asia and now heading forward to European and the American continents from Taiwan bullshit even mean? You are not helping with decolonization with this gibberish. Streaming? Selling physical copies? ',
        'Apparently, you are a slave of consumerism. You should provide your music for free if you really want to make a change. Your whining lyrics are no different than the typical Mandarin pop songs. Why do you even bother writing in English? You will never get a Pitchfork rating even if it’s a mere 0.0 unless they change their name to Pitchchopstick.',
      ],
    },
    {
      subject: 'Sherry’s Neighbors (2022)',
      person:
        'A guy who shared a stage with Yau in the early 00s. Two kids and zero bands at the time being',
      content: [
        'I think you are trying too hard to rip off Yo La Tengo this time, in a really shallow way! I suspect you are only creating this ‘Sherry’ character to be Super Napkin’s Jad Fair. The music is not even close. Shame on you.',
      ],
    },
    {
      subject: 'There’s Nothing That Cannot Beat Me (2020)',
      person: 'A Spurs Fan from Arizona',
      content: [
        'Their 2020’s release, There’s Nothing That Cannot Beat Me, sees the band taking a step toward more refined aesthetics and bolder sonics -- a sound that roughly approximates the grandeur of their live shows, an intoxicating mix of delicately layered psychedelic guitars within which rambunctious raw noise moments bubble up to the surface.',
      ],
    },
    {
      subject: 'Diamond Shaped Hearts (2018)',
      person: 'Yau’s day-job coworker Taylor',
      content: [
        'The band channels their inner DIY lo-fi ethos, serving up some scorching guitar tones -- the type that could make the hair on J. Mascis’s back stand on-end -- atop a bed of powerful, precise drumming and steady-as-she-goes bass riffs.',
      ],
    },
    {
      subject: 'Rhythmic Lizard Moon (2016)',
      person: 'YouTube user Cat_Cat',
      content: [
        'Reverb, drone, endless guitar riffs, Super Napkin always gives us an illusion of shoegaze/Yo La Tengo wannabe, but hey, they are not. Adopting the unique psychedelic elements from the shoegazing era, Super Napkin would tell a depressive story without any reservation. By this point, they are more a punk band than any other fashioned-core thingy.',
      ],
    },
  ],
})
onMounted(() => {
  AOS.init({ disable: 'phone' })
})
</script>
<style scoped>
.paragraph {
  @apply px-8 py-4;
}
.article {
  @apply pt-2 font-redhat text-sm font-normal leading-relaxed text-neutral-700  sm:pt-0 sm:text-base;
}
</style>
