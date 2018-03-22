<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/idangerous.swiper.css'
  export default {
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      speed: {
        type: Number,
        default: 600
      }
    },
    mounted() {
      setTimeout(() => {
        this._initSlider()
      }, 20)
    },
    methods: {
      _initSlider() {
        this.swiper = new Swiper('.swiper-container', {
          pagination : '.pagination',
          loop: this.loop,
          autoplay: 2000,
          speed: 1000,
          autoplayDisableOnInteraction : false,
        })
      }
    }
  }
</script>

<style  lang="stylus" ref="stylesheet/stylus">
  .swiper-container
    height: 235px
    .swiper-wrapper
      img
        width: 100%
        height: 100%
    .pagination
      position: absolute
      z-index: 20
      bottom: 20px
      width: 100%
      height: 20px
      text-align: center
      .swiper-pagination-switch
        display: inline-block
        width: 10px
        height: 10px
        border-radius: 50%
        background: #555
        margin: 0 5px
        opacity: 0.8
        cursor: pointer
      .swiper-active-switch
        background: #fff
</style>
