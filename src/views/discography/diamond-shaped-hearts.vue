<template>
    <Layout>
      <section class="container">
                <p class="desc">{{desc}}</p>
        <div class="cover">
          <g-image src="~/assets/img/album-art/2018-2nd.jpg" alt="Diamond Shaped Hearts"/>
        </div>
                <div class="group">
                  <div class="pageTitle">{{title}}</div>
                        <div class="tracks" v-for="edge in $static.albumTracks.edges" :key="edge.node.id">
        <div class="tracks__list" v-for="track in edge.node.album2" :key="track.id">
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
          <LazyYoutube src="https://www.youtube.com/watch?v=jy4CyMtX_9M" />
        </div>
        <div class="yt">
          <LazyYoutube src="https://www.youtube.com/watch?v=EdBtZZiCC38" />
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
        album2{
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
    title: 'Diamond Shaped Hearts'
  },
  data(){
    return{
    title: 'Diamond Shaped Hearts',
    released:"May 18, 2018",
    desc:"「鑽石形狀的心，仍然只是顆心。為了不易碎，我們都扭曲成該成為的模樣。堅硬地碰撞再一起淌血，也許是我們唯一認識彼此的方式。」",
    listen:[{"name":"bandcamp","link":"https://supernapkin.bandcamp.com/album/diamond-shaped-hearts"},{"name":"Spotify","link":"spotify:album:0jSDgk9TP5df5IH94fjIPD"},{"name":"Apple Music","link":"https://music.apple.com/album/diamond-shaped-hearts/1387820653"},{"name":"MOOV","link":"https://moov.hk/#/album/VASV00342215A"},{"name":"NetEase Cloud Music","link":"https://music.163.com/#/album?id=38976089"}]
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