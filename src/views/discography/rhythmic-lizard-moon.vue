<template>
    <Layout>
      <section class="container">
        <p class="desc">{{desc}}</p>
        <div class="cover">
          <g-image src="~/assets/img/album-art/2016-1st.jpg" alt="Rhythmic Lizard Moon"/>
        </div>
        <div class="group">
        <div class="pageTitle">{{title}}</div>
        <div class="tracks" v-for="edge in $static.albumTracks.edges" :key="edge.node.id">
        <div class="tracks__list" v-for="track in edge.node.album1" :key="track.id">
          <div class="tracks__list-num">
            {{track.track}}
          </div> 
          <div class="tracks__list-song">
            {{track.song}}
          </div> 
        </div>
        </div>
        <div class="rel">released {{released}}</div>
        </div>
        <div class="yt">
          <LazyYoutube src="https://www.youtube.com/watch?v=uoLYfKt-l38" />
        </div>
        <div class="icon">
        <span class="material-icons">headphones</span>
        </div>
          <ul class="listen__list" v-for="data in listen" :key="data.index">
            <li class="listen__list-item hover-target">
              <a :href="data.link" target="_blank">{{data.name}}</a>
            </li>
          </ul>
      </section>
    </Layout>
</template>
<static-query>
query{
  albumTracks: allAlbumTracks{
    edges{
      node{
        id
        album1{
          year
          title
          track
          song
        }
      }
    }
  }
}
</static-query>
<script>
export default {
    metaInfo: {
    title: 'Rhythmic Lizard Moon'
  },
  data(){
    return{
    title: 'Rhythmic Lizard Moon',
    released:"April 8, 2016",
    desc:"「如果要構思一個超級英雄的故事，我想寫一個叫做紙巾人的角色，能力是好好地聽每個心靈受傷的人說話，陪著他們將傷口上的污垢和血淚都擦拭乾淨。每個人都需要這樣的英雄。」",
    listen:[{"name":"bandcamp","link":"https://supernapkin.bandcamp.com/album/rhythmic-lizard-moon"},{"name":"soundcloud","link":"https://soundcloud.com/super-napkin/sets/rhythmic-lizard-moon-2016"},
    {"name":"street voice","link":"https://tw.streetvoice.com/SuperNapkin/songs/album/97263501/"}
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    color: $text-color-main;
    padding: 5rem 5rem;
    @media (min-width:670px){
      padding: 5rem 17rem;

    }

    .tracks{

      &__list{
        display: flex;
      font-size: $font-size-desc;
      padding: .2rem 0;
        @media (min-width:670px){
        margin: 0rem 0rem 0rem;
        }
        &-num{
          margin-right: .5rem;
        }
      }
    }
    .group{
      @media (min-width:670px){
              display: grid;
      place-items: center;
      }
    }

    .pageTitle{
      margin: 4rem 0 1rem;
      font-size: $font-size-album;
      @media (min-width:670px){
      margin: 4rem 0 1rem;
        
      }
    }
    .rel{
      font-size: $font-size-desc;
      margin: 1rem 0 1rem;
      @media (min-width:670px){
        margin: 2rem 0rem 4rem;
      }
    }
    .desc{
        font-size: $font-size-album;
        margin: 0rem 0 4rem;
        @media (min-width:670px){
          font-size: $font-size-desc;
        }

      }
    .cover{
      margin: 2rem 0 0rem;
      @media (min-width:670px){
        max-width: 560px;
        margin: auto;
      }

      img{
        width: 100%;
        display: block;
      }
    }

    .yt{
      display: grid;
      place-items: center;
      margin: 2rem 0 4rem;
    }
    .icon{
      display: grid;
      place-items: center;
      margin:4rem 0 2rem;

      span{
        @media (min-width:670px){
          font-size: 3rem;
      }
      }

    }
    .listen__list{
      display: grid;
      place-items: center;

      &-item{
        list-style: none;
        a{
          color: $text-color-main;
          text-decoration: none;
          font-size: $font-size-mobile;

        }
      }
    }
  }
</style>