<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
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
          loop: this.loop,
          autoplay: 2000,
          speed: 1000,
          autoplayDisableOnInteraction : false,
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .swiper-container
    height: 235px
    .swiper-wrapper
      img
        width: 100%
        height: 100%
    .swiper-pagination-bullet
      width: 10px
      height: 10px
    .swiper-pagination-bullet-active
      background-color: #fb7299
</style>
