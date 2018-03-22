<template>
  <div class="c-head">
    <a href="" class="h-logo">
      <img src="../../common/images/logo.png" alt="logo">
      <!--<i class="iconfont icon-bilibili"></i>-->
    </a>
    <router-link tag="a" class="h-search" to="/search">
      <i class="iconfont icon-search"></i>
    </router-link>
    <a href="" class="h-face">
    </a>
    <a href="" class="h-download">
      <p>下载App</p>
    </a>

  </div>

</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  @import "~common/stylus/icon"
  .c-head
    position: fixed
    width: 100%
    height: 62px
    padding: 13px 0
    background-color: #fff
    line-height: 62px
    z-index: 999
    .h-logo
      position: absolute
      left: 37px
      img
        width: 124px
        height: 55px
    .h-search
      position: absolute
      right: 42%
      .iconfont
        color: #AAAAAA
        font-size: 42px
    .h-face
      position: absolute
      right: 30%
      top: 50%
      margin-top: -24px
      width: 48px
      height: 48px
      background: url('../../common/images/noface.gif') no-repeat center/cover
      border-radius: 50%
    .h-download
      position: absolute
      top: 50%
      right: 24px
      width: 160px
      height: 50px
      margin-top: -25px
      line-height: 50px
      text-align: center
      background-color: #FB7299
      border-radius: 10px
      p
        color: #ffff
        font-size: 26px

</style>
