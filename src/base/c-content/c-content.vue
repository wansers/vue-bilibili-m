<template>
  <div class="content-box" v-if="ranking.length">
    <div class="c-title">
      <p>

        <m-svg className="#icon-bianjituijian"></m-svg>
        <span>热门推荐</span>
      </p>
      <a href="" v-if="rIconfont">
        <i class="iconfont icon-paihangbang"></i>
        <span>排行榜</span>
        <i class="iconfont icon-gengduo"></i>
      </a>
      <a href="" v-if="!rIconfont">
        <span class="more">查看更多</span>
        <i class="iconfont icon-gengduo"></i>
      </a>
    </div>
    <div class="c-body">
      <a :href="item.aid" v-for="item in ranking">
        <div class="c-body-img">
          <img v-lazy="item.pic" :alt="item.title">
          <div class="img-tip">
            <div class="l-tip">
              <i class="iconfont icon-bofangshu"></i>
              <span>{{(item.play || item.stat.view) | formate}}</span>
            </div>
            <div class="r-tip">
              <i class="iconfont icon-danmushu"></i>
              <span>{{item.video_review || item.stat.danmaku | formate}}</span>
            </div>
          </div>
        </div>
        <div class="c-body-p">
          <p>{{item.title}}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MSvg from 'base/m-svg/m-svg'
  export default {
    props: {
      ranking: {
        type: Array,
        default: []
      },
      rIconfont: {
        type: Boolean,
        default: false
      }
    },
    components: {
      MSvg
    },
    filters: {
      formate: function(value) {
        if(!value) {
          return 0
        }
        return value < 10000 ? value : (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .content-box
    .c-title
      position: relative
      width: 100%
      height: 105px
      line-height: 105px
      p
        position: absolute
        top: 0
        left: 24px
        font-size: 32px
        .icon
          width: 56px
          height: 44px
      a
        position: absolute
        top: 0
        right: 24px
        font-size: 28px
        color: orange
        .more
          color: #AAAAAA
        i:first-child
          margin-right: 7px
          font-size: 40px
          color: orange
        i:last-child
          color: #AAAAAA
    .c-body
      display: flex
      flex-flow: wrap
      justify-content: space-between
      padding: 0 12px
      a
        width: 363px
        margin-bottom: 32px
        .c-body-img
          position: relative
          width: 340px
          height: 212px
          margin: 0 12px
          border-radius: 12px
          img
            width: 340px
            height: 212px
            color: transparent
            border-radius: 12px
          .img-tip
            position: absolute
            bottom: 3px
            width: 100%
            height: 32px
            color: #fff
            .l-tip
              position: absolute
              top: 0
              left: 20px
              span
                margin-left: 10px
            .r-tip
              position: absolute
              top: 0
              right: 80px


        .c-body-p
          width: 340px
          margin: auto
          margin-top: 10px
          height: 50px
          color: #212121
          overflow: hidden


</style>
