<template>
    <Layout>
      <section class="container">
        <p class="desc">{{desc}}</p>

        
        <div class="cover">
          <g-image src="~/assets/img/album-art/2020-3rd.jpg" alt="There's Nothing That Cannot Beat Me"/>
        </div>
        <div class="group">
                    <div class="pageTitle">{{title}}</div>
                          <div class="tracks" v-for="edge in $static.albumTracks.edges" :key="edge.node.id">
        <div class="tracks__list" v-for="track in edge.node.album3" :key="track.id">
          <div class="tracks__list-num">{{track.track}}</div> 
          <div class="tracks__list-song">{{track.song}}</div> 
        </div>
      </div>
        <div class="rel">released {{released}}</div>
        </div>
        <div class="yt">
          <LazyYoutube src="https://www.youtube.com/watch?v=mfFnPvhy-GE" />
        </div>
        <div class="icon">
        <span class="material-icons">headphones</span>
        </div>
        <ul class="listen__list" v-for="data in listen" :key="data.index">
          <li class="listen__list-item hover-target"><a :href="data.link" target="_blank">{{data.name}}</a></li>
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
        album3{
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
    title: "There's Nothing That Cannot Beat Me"
  },
  data(){
    return{
    title: "There's Nothing That Cannot Beat Me",
    released:"May 11, 2020",
    desc:"「當一切聲音停下，你才發現我們已經到了很遠的地方，到了那個當時我們以為還要很久很久才會來到的，像是比外太空還要遠的 2020 年代。」—— 林易澄",
    listen:[{"name":"bandcamp","link":"https://supernapkin.bandcamp.com/album/theres-nothing-that-cannot-beat-me"},{"name":"Spotify","link":"spotify:album:5MD1zeCYPjOlqFFk9dAJAm"},{"name":"Apple Music","link":"https://music.apple.com/album/theres-nothing-that-cannot-beat-me/1518778453"},{"name":"MOOV","link":"https://moov.hk/#/album/VARM00643642A"},{"name":"NetEase Cloud Music","link":"https://music.163.com/#/album?id=91095589"}
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
        width: 15ch;
      }
    }
    .rel{
      font-size: $font-size-desc;
      margin: 1rem 0 1rem;
      @media (min-width:670px){
        margin: 2rem 0 4rem;
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
      margin: 2rem 0 4rem;
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
      margin: 2rem 0 2rem;

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