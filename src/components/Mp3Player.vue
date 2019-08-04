<template>
  <div class="mp3player">
    <div class="mp3player__main">
      <div class="mp3player__main-top">
        <div class="artist">
          <div class="artist__display">
            <v-icon color="#FFFFFF">fas fa-th-large</v-icon>
          </div>
          <div class="artist__details">
            <div class="artist__name">
              <span>Artist</span>
              <h2>ED SHEERAN</h2>
            </div>
            <div class="artist__actions">
              <div class="artist__actions-followers">252,134 FOLLOWERS</div>
              <button class="artist__actions-follow" >follow</button>
              <button class="artist__actions-play">Play</button>
            </div>
          </div>
        </div>
        <div class="playlist">
          <div class="playlist__summary">
            <div class="playlist__song-img">
              <img src="../assets/Collaborations_Project.png" alt="">
            </div>
            <div class="playlist__song-detail">
              <div class="playlist__song-title">
                <span>No.6 Collaborations Project</span>
              </div>
              <div class="playlist__song-actions">
                <button class="playlist__song-play">Play</button>
              </div>
            </div>
            <div class="playlist__song-like">
              <img src="../assets/heart-2.svg" alt="">
            </div>
          </div>
          <div class="playlist__songs">
            <div class="list">
              <div class="list__song">
                <div class="list__song-current"></div>
                <div class="list__song-index"></div>
                <div class="list__song-title">Title</div>
                <div class="list__song-length">Length</div>
                <div class="list__song-likes likes">
                  <img src="../assets/heart-2.svg" alt="">
                </div>
              </div>
              <div v-for="(song, index) in songs" :key="index" class="list__song">
                <div class="list__song-current">
                    <img v-show="currentSongIdx == index" src="../assets/music_note.svg" alt="">
                  </div>
                <div class="list__song-index">
                  <div class="list__song-number">
                    {{ index }}
                  </div>
                </div>
                <div class="list__song-title title">
                  {{ song.title }}
                </div>
                <div class="list__song-length length">
                  {{ song.length }}
                </div>
                <div class="list__song-likes likes">
                  <div class="list__song-likecounts">
                    {{ song.likes }}
                  </div>
                  <div class="list__song-like">
                    <img src="../assets/heart-2.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mp3player__main-bottom">
        <div class="progressbar">
          <div class="progress"></div>
        </div>
        <div class="controls">
          <div class="controls__time">
            <div>{{ currentTime }}</div>
          </div>
          <div class="controls__songdetail">
            <div class="controls__songdetail-wrapper">
              <img src="../assets/Collaborations_Project.png" alt="">
              <div>
                <span>I Don’t Care</span>
                <br>
                <span>Ed Sheehan (with Justin Bieber)</span>
              </div>
            </div>
          </div>
          <div class="controls__wrapper">
            <div class="controls__wrapper-shuffle">
              <img src="../assets/ic_shuffle_24px.svg" alt="">
            </div>
            <div class="controls__wrapper-backward">
              <img src="../assets/backward.svg" alt="">
            </div>
            <div class="controls__wrapper-play">
              <img src="../assets/pause.svg" alt="">
            </div>
            <div class="controls__wrapper-fastfoward">
              <img src="../assets/fastforward.svg" alt="">
            </div>
            <div class="controls__wrapper-repeat">
              <img src="../assets/ic_repeat_24px.svg" alt="">
            </div>
          </div>
          <div class="controls__volume">
            <img src="../assets/ic_volume_up_24px.svg" alt="">
            <div class="volume">
              <input type="range" name="" id="" min="0" max="100">
            </div>
          </div>
          <div class="controls__like">
            <img src="../assets/heart-2.svg" alt="">
          </div>
          <div class="controls__time">
            <div>{{  currentSong }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mp3player__side">
      <div class="mp3player__side-top">
        <div class="mp3player__side-avatar">
          <v-icon>fas fa-user</v-icon>
        </div>
      </div>
      <div class="mp3player__side-middle">
        <div class="mp3player__home">
          <img src="../assets/home-52.svg" alt="">
        </div>
        <div class="mp3player__library">
          <img src="../assets/ic_library_music_48px.svg" alt="">
        </div>
        <div class="mp3player__archive">
          <img src="../assets/archive-2.svg" alt="">
        </div>
      </div>
      <div class="mp3player__side-bottom">
        <div class="mp3player__zoom">
          <img src="../assets/zoom-2.svg" alt="">
        </div>
        <div class="mp3player__settings">
          <img src="../assets/settings-gear-63.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Mp3Player',
  data () {
    return {
      currentTime: '00:00',
      songs: [
        {
          title: 'Beautiful People (featuring Khalid)',
          length: '3:17',
          likes: '12,523'
        },
        {
          title: 'South of the Border (featuring Camila Cabello ……)',
          length: '3:24',
          likes: '12,523'
        },
        {
          title: 'Cross Me (featuring Chance the Rapper and PnB Rock)',
          length: '3:26',
          likes: '12,523'
        },
        {
          title: 'Take Me Back to London (featuring Stormzy)',
          length: '3:09',
          likes: '12,523'
        },
        {
          title: 'Best Part of Me (featuring Yebba)',
          length: '4:03',
          likes: '12,523'
        },
        {
          title: 'I Don\'t Care (with Justin Bieber)',
          length: '3:39',
          likes: '12,523'
        },
        {
          title: 'Antisocial (featuring Travis Scott)',
          length: '2:41',
          likes: '12,523'
        }
      ]
    }
  },
  computed: {
    currentSong ():string {
      return this.songs[5].length
    },
    currentSongIdx ():number {
      return this.songs.findIndex(song => song.title === 'Beautiful People (featuring Khalid)')
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.mp3player
  width: 100%
  height: 100%
  display: flex
  &__side
    width: 80px
    height: 100%
    padding-left: .75rem
    padding-right: .75rem
    padding-top: 50px
    padding-bottom: 42px
    background-color: #4B3434
    display: flex
    flex-direction: column
  &__side-top
    flex: 0.5
  &__side-avatar
    width: 56px
    height: 56px
    border: solid 1px #707070
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
  &__side-middle
    flex: 2
    text-align: center
  &__library
    margin-top: 63px
    margin-bottom: 63px
  &__side-bottom
   text-align: center
    flex: 1
  &__zoom
    margin-bottom: 28px
  &__main
    width: 95%
    height: 100%
    display: flex
    flex-direction: column
  &__main-top
    width: 100%
    flex: 9
    display: flex
  &__main-bottom
    flex: 1
    display: flex
    flex-direction: column

.artist
  width: 462px
  height: 100%
  background-image: url("../assets/artist_photo.png")
  background-position: center
  background-size: cover
  flex: 1.5
  display: flex
  flex-direction: column
  padding-left: 62px
  &__display
    text-align: right
    margin-top: 60px
    margin-right: 44px
    height: 50%
    flex: 1
  &__name
    flex: 1
    height: 50%
    & span
      color: #E5B4B7
    & h2
      color: #FFFFFF
  &__details
    background: rgb(0,0,0)
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%)
  &__actions
    margin-top: 19px
    margin-bottom: 30px
    display: flex
    align-items: center
    justify-content: space-between
  &__actions-followers
    font-size: 11px
    color: #FFFFFF
    width: 51px
  &__actions-follow
    width: 128px
    height: 30px
    color: #964A4D
    border: solid 1px #FFFFFF
    border-radius: 17px
  &__actions-play
    width: 128px
    height: 30px
    color: #FFFFFF
    background-color: #964A4D
    border: solid 1px #964A4D
    border-radius: 17px
    margin-right: 30px

.playlist
  height: 100%
  background-color: #1A1A1A
  flex: 2
  display: flex
  flex-direction: column
  &__summary
    margin-top: 89px
    margin-left: 42px
    display: flex
  &__songs
    overflow: hidden
  &__song-img
    width: 90px
    height: 90px
  &__song-detail
    padding-left: 53px
  &__song-title
    margin-top: 10px
    position: relative
    &:before
      position: absolute
      top: -30px
      content: '2019'
      color: #707070
    & span
      color: #FFFFFF
      padding-right: 17px
      font-size: 32px
  &__song-actions
    display: flex
    justify-content: space-between
  &__song-play
    width: 128px
    height: 30px
    margin-top: 10px
    color: #FFFFFF
    background-color: #964A4D
    border: solid 1px #964A4D
    border-radius: 17px
  &__song-like
    display: flex
    flex-direction: column-reverse
    & img
      margin-bottom: 10px
.list
  width: 100%
  height: 100%
  margin-top: 72px
  overflow: auto
  &__song
    width: 100%
    height: 56px
    display: flex
    align-items: center
    &:not(:first-child)
      font-size: 14px
      border-top: solid 0.2px #707070
      border-bottom: solid 0.2px #707070
      & div
        color: #ffffff
      &.likes > img
        width: 14px
        height: 12.68px
    &:first-child
      color: #964A4D
  &__song-index
    width: 64.5px
    height: 100%
    display: flex
    align-items: center
    justify-content: space-around
  &__song-current
    width: 36.5px
    text-align: center
  &__song-number
    width: 50%
    font-size: 18px
    color: #FFFFFF
    text-align: center
    padding-right: 47px
  &__song-title
    flex: 2
    position: relative
  &__song-length
    flex: 1
    text-align: center
  &__song-likes
    flex: 1
    text-align: center
    display: flex
  &__song-likecounts
    margin-right: 14px
  &__song-likes
    justify-content: center
    & img
      width: 14px
      height: 12.68px
.progressbar
  width: 100%
  height: 13px
  & div.progress
    width: 50%
    height: 13px
    background-color: #E5B4B7
.controls
  width: 100%
  height: 100%
  background: rgb(54,16,36)
  background: linear-gradient(0deg, rgba(54,16,36,1) 0%, rgba(119,32,32,1) 50%)
  height: calc(100% - 13px)
  display: flex
  justify-content: space-between
  &__time
    width: 75px
    font-size: 12px
    color: #FFFFFF
    text-align: center
  &__songdetail
    color: #ffffff
    width: 412px
  &__songdetail-wrapper
    margin-top: 19px
    display: flex
    & img
      width: 40px
      height: 40px
      margin-right: 19px
  &__wrapper
    width: 253px
    display: flex
    align-items: center
    justify-content: space-between
  &__volume
    display: flex
    align-items: center
    margin-left: 146px
    margin-right: 54px
    & img
      margin-right: 9px
  &__like
    display: flex
    align-items: center
    & img
      width: 24px
      height: 21px
</style>
