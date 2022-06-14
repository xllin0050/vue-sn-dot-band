<template>
  <div class="w-full pb-10 lg:pb-40">
    <PageTitle>about us</PageTitle>
    <article v-show="userLang === 'zh'" class="article">
      <p class="paragraph">
        Super Napkin (超級紙巾)
        由吉他手/主唱「小帕」、鼓手「施霖」、以及貝斯手「黃尾」組成。2014
        成團以來已發表三張專輯，並預計在 2022 年發行第四號及第五號錄音作品。
      </p>
      <p class="paragraph">
        這八年來，他們與台灣獨立音樂的主線保持著微妙的距離。當 2016
        年台灣樂團被化約為厭世兩個字時，他們以瞪鞋之聲在「節奏的蜥蜴之月」中唱著「如果你能接受這世界的不完美，就能省下很多淚水」。在
        2018 年整個 City 都是 Pop 的縫隙間，Super Napkin
        以更強烈的節奏獻上「鑽石心」，嘗試平撫無法鬆弛的靈魂。2020
        年的「沒有打不倒我的東西」，除了曲名長到舌頭會打結外，幾乎是一張純演奏專輯，以樂器定義自己的唱腔口音。
      </p>
      <p class="paragraph">
        儘管每張專輯的風貌皆不同，Super Napkin
        一貫地以溫柔的方式叛逆著，而他們的任性，來自於對心中的搖滾英雄之愛。
      </p>
      <p class="paragraph">
        生於八零年代的台灣，空氣中交雜著東西洋流行金曲，及無盡的引擎、風扇、電鑽與洗衣機噪音。這些聲響或許刻進了他們的耳膜，自青春期起，就追隨著歐美
        60 年代已降不停發展的實驗/另類搖滾。Velvet Underground
        甜美的旋律配上高攻擊性的小提琴、Neu! 延伸到天際線般的連續鼓擊、Sonic
        Youth 及 My Bloody Valentine 的吉他噪音金曲，對 Super Napkin
        來說如同來自遠方的記憶，而這些團的「實驗性」則是理所當然的，做音樂的方式。
      </p>
      <p class="paragraph">
        以這樣的耳朵，面對現在的生活，到底想聽見怎樣的聲音，就盡可能的誠實演奏出來，是
        Super Napkin 唯一懂得的創作方式。
      </p>
      <p class="paragraph">
        當時在「節奏的蜥蜴之月」與「鑽石心」裡不斷嘗試，找尋屬於自己聲音的Super
        Napkin，來到「沒有打不倒我的東西」時已描繪出屬於自己的獨特樣貌。透過精力充沛的扎實鼓擊、精力過剩的吉他噪音，與經歷磨練的穩固貝斯低頻，他們說著關於登山、關於口誤、關於自己與對方、關於爭吵與和好的故事。
      </p>
      <p class="paragraph">
        Super Napkin
        沿用多年的樂團介紹，僅短短寫著「如果要構思一個超級英雄的故事，我想寫一個叫做紙巾人的角色，能力是好好地聽每個心靈受傷的人說話，陪著他們將傷口上的污垢和血淚都擦拭乾淨。每個人都需要這樣的英雄」，而他們的音樂，則是最適合紙巾人的主題曲。
      </p>
    </article>
    <article v-show="userLang === 'en'" class="article">
      <p class="paragraph">
        Super Napkin is a fuzz-pop trio hailing from Taiwan. Feeling that their
        original name, “Super Nap Kid”, was a bit tired, they switched to “Super
        Napkin” in honor of their favorite superhero, Napkin Man, who zooms
        across the universe drying the tears of thesad and heartbroken. (In a
        pinch, he can also sop up your spilled milk.)
      </p>
      <p class="paragraph">
        The project was conceived as a portrait of an artist beginning to grow
        old. It is veteran singer-songwriter-guitarist Matt Yau’s first stab at
        making music post-marriage (hint: it helps if your wife can play bass)
        and it has gifted him one more opportunity to revel in his roots.
      </p>
      <p class="paragraph">
        Roots. As an 80’s kid born in the Taipei Basin, the drone of distant
        motorbikes and the soothing sounds of humming air conditioners comprised
        Yau’s early childhood ‘soundtrack’. So when he came of age in the
        Soulseek 56k baud modem era, it made perfect sense for him to fall right
        the fuck in love with the equally droney sounds of Yo La Tengo, Sonic
        Youth, Eric’s Trip, The Microphones, and My Bloody Valentine.
      </p>
      <p class="paragraph">
        Yau and his wife Weiting, who was still paying installments on her first
        bass when she joined the band, and drummer Shih, who proved his fit by
        seamlessly filling in on drums for a show with Yau’s previous band (the
        grungy local legends Slack Tide), have together produced three
        full-length records, each oozing 90s nostalgia.
      </p>
      <p class="paragraph">
        Both Rhythmic Lizard Moon in 2016 and Diamond Shaped Hearts in 2018 saw
        the band channeling their inner DIY lo-fi ethos, serve up some scorching
        guitar tones --the type that could makethe hair on J. Mascis’s back
        stand on-end --atop a bed of powerful,precise drumming and
        steady-as-she-goes bass riffs.
      </p>
      <p class="paragraph">
        2020’s release, There’s Nothing That Cannot Beat Me, sees the band
        taking a step toward more refined aesthetics and older sonics --asound
        that roughly approximates the grandeur of their live shows, an
        intoxicating mix of delicately layered psychedelic guitars within which
        rambunctious raw noise moments bubble up to the surface.
      </p>
    </article>

    <div class="mx-auto max-w-2xl pt-12 lg:pt-28">
      <img :src="imgUrl" alt="About Us" class="block w-full" />
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { storeUserLang } from '@/stores/lang'

const store = storeUserLang()
const userLang = computed(() => store.lang)

const imgUrl = new URL('../assets/images/about-us.jpg', import.meta.url).href
</script>
<style scoped>
.paragraph {
  @apply py-4;
}
.article {
  @apply mx-auto max-w-2xl break-all pt-2 text-left font-redhat text-sm font-normal leading-relaxed text-neutral-700  sm:break-words sm:pt-0 sm:text-justify sm:text-base;
}
</style>
