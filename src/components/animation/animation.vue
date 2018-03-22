<template>
  <div class="animation">
    <div class="second-nav-box">
      <ul class="second-nav">
        <li><a href="">推荐</a></li>
        <li><a href="">MAD·AMV</a></li>
        <li><a href="">短片·手术·配音</a></li>
        <li><a href="">综合</a></li>
      </ul>
    </div>
    <scroll class="animation-content" :data="regions" ref="scroll">
      <div>
        <c-content :ranking="regions"></c-content>
        <c-content :ranking="regions"></c-content>
        <c-content :ranking="regions"></c-content>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getRegion} from "api/region";
  import CContent from 'base/c-content/c-content'
  import {ERR_OK} from "api/config";
  import Scroll from 'base/scroll/scroll'

  export default {
    created() {
      this._getRegions()
    },
    mounted() {
      setTimeout(() => {
        this.$refs.scroll.refresh()
      }, 20)
    },
    data() {
      return {
        regions: []
      }
    },
    methods: {
      _getRegions() {
        getRegion().then((res) => {
          if(res.code === ERR_OK) {
            this.regions = res.data.archives.slice(0,4)
          }
        })
      }
    },
    components: {
      CContent,
      Scroll
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .animation
    position: fixed
    top: 176px
    bottom: 0
    width: 100%
    margin-top: -5px
    .second-nav-box
      position: absolute
      top: 0
      z-index: 999
      width: 100%
      height: 88px
      color: #757575
      background-color: #F9F9F9
      .second-nav
        display: flex
        flex-wrap: nowrap
        li
          flex: 1
          width: 300px
          height: 88px
          font-size: 28px
          text-align: center
          line-height: 88px
    .animation-content
      position: fixed
      top: 264px
      bottom: 0
      width: 100%

</style>
