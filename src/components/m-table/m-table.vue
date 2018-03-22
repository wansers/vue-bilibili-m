<template>
  <div class="n-box">
      <div class="nav">
        <div class="swiper-wrapper">
          <router-link tag="div" class="swiper-slide" to="/recommend">
            <span>首页</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/animation">
            <span>动画</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/fanju">
            <span>番剧</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/test">
            <span>国创</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/test">
            <span>音乐</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/test">
            <span>舞蹈</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/test">
            <span>科技</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/test">
            <span>游戏</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/test">
            <span>娱乐</span>
          </router-link>
          <router-link tag="div" class="swiper-slide" to="/test">
            <span>鬼畜</span>
          </router-link>
        </div>
      </div>
      <div class="n-right" @click="navClickFun">
        <i class="iconfont icon-xiala"></i>
      </div>
      <div class="nav-dialog" :class="{'nav-dialog-hidden':navClick}" ref="navDialog">
          <ul class="fix-flex">
            <li class="nav-dialog-item">
              <router-link tag="a" to="/recommend">首页</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/animation">动画</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/fanju">番剧</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/test">国创</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/test">音乐</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/test">舞蹈</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/test">科技</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">游戏</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">鬼畜</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">电影</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">电视剧</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">纪录片</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">影视</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">时尚</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">生活</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">广告</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">直播</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">相簿</router-link>
            </li>
            <li class="nav-dialog-item">
              <router-link tag="a" to="/hello">娱乐</router-link>
            </li>
            <li class="nav-dialog-item"></li>
            <li class="nav-dialog-item"></li>
            <li class="nav-dialog-item"></li>
            <li class="nav-dialog-item"></li>
            <li class="nav-dialog-item"></li>
          </ul>
          <div class="nav-shangla">
            <i class="iconfont icon-xiala" @click="navClickFun"></i>
          </div>
        </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/idangerous.swiper.css'

  export default {
    data() {
      return {
        navClick: false
      }
    },
    mounted() {
      setTimeout(() => {
        this._initTable()
      }, 20)
    },
    methods: {
      _initTable() {
        this.swiper = new Swiper('.nav', {
          loop: false,
          speed: 1000,
          freeMode : true,
          slidesPerView : 6,

        })
      },
      navClickFun() {
        this.navClick = !this.navClick
      }
    }
    // computed: {
    //   navClickFun: function() {
    //     this.navClick = !this.navClick
    //   }
    // }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .n-box
      position: fixed
      top: 88px
      width: 100%
      height: 88px
      margin-top: -2px
      color: #757575
      background-color: #fff
      z-index: 998
      .nav
        width: 100%
        height: 88px
        margin-left: 15px
        .swiper-wrapper
          .swiper-slide
            text-align: center
            line-height: 88px
            span
              display: inline-block
              width: 64px
              height: 64px
              font-size: 28px
              line-height:64px
            &.router-link-active
              span
                border-bottom: 5px solid #FC9DB8
                color: #FC9DB8
      .n-right
        position: absolute
        top: 0
        right: 0
        width: 12%
        height: 88px
        text-align: center
        line-height: 88px
        background-color: #fff
        z-index: 2
        .iconfont
          display: block
          width: 35px
          height: 97px
          color: #AAAAAA
          font-size: 35px
      .nav-dialog-hidden
        transform: translateY(402px) translateZ(0) !important
      .nav-dialog
        position: absolute
        top: -402px
        left: 0
        height: 402px
        padding: 0 16px
        background: #fff
        z-index: 6
        transform: translateY(0) translate(0)
        transition : transform .6s
        .fix-flex
          display: flex
          flex-flow: wrap
          justify-content: space-between
          align-content: flex-start
          width: 100%
          height: 350px
          .nav-dialog-item
            display: block
            width: 120px
            height: 75px
            font-size: 28px
            text-align: center
            line-height: 75px
            a
              display: inline-block
              height: 65px
            .router-link-active
              color: #FC9DB8
              border-bottom: 5px solid #FC9DB8
        .nav-shangla
          position: absolute
          bottom: 0
          left: 0
          width: 100%
          height: 60px
          line-height: 60px
          text-align: center
          .iconfont
            display: inline-block
            transform: rotate(180deg)
            font-size: 32px
            color: #7e8c8d
</style>
