<template>
  <div class="recommend">
    <scroll :data="rankings" ref="scroll" class="recommend-content">
      <div>
        <div v-if="!!recommends.length" class="slider">
          <slider>
            <a v-for="item in recommends" :href="item.url" class="swiper-slide">
              <img @load="loadImage" :src="item.pic" :alt="item.name">
            </a>
          </slider>
        </div>
        <c-content :ranking="rankings" :rIconfont=true></c-content>
        <c-content :ranking="regions" ></c-content>
        <c-content :ranking="rankings" ></c-content>
        <!--<c-content v-for="item in regions" :ranking="item.arr" :key="item.id"></c-content>-->
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import CContent from 'base/c-content/c-content'
  import Scroll from 'base/scroll/scroll'
  import {getRecommend,getRanking} from 'api/recommend'
  import {getRegion} from 'api/region'
  import {ERR_OK} from 'api/config'
  export default {
    data() {
      return {
        recommends: [],
        rankings: [],
        regions: []
      }
    },
    created() {
      this._getRecommend()
      this._getRanking()
      this._getRegion()
      // this.$nextTick(() => {
      //   this.loadImage()
      // })
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if(res.code === ERR_OK){
            this.recommends = res.data || []
          }
        })
      },
      _getRanking() {
        getRanking().then((res) => {
          if(res.code === ERR_OK) {
            this.rankings = res.data.slice(0,4)
          }
        })
      },
      _getRegion() {
          getRegion().then((res) => {
            if(res.code === ERR_OK) {
              this.regions = res.data.archives.slice(0,4)
            }
          })
      },
      loadImage() {
        if(!this.imageLoading){
          this.$refs.scroll.refresh()
          this.imageLoading = true
        }
      }
    },
    components: {
      Slider,
      CContent,
      Scroll
    }
  }
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend
    position: fixed
    top: 176px
    bottom: 0
    width: 100%
    .recommend-content
      height: 100%
      overflow: hidden
</style>
