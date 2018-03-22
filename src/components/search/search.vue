<template>
  <div class="search-wrap">
    <div class="search-top">
      <div class="top-box">
        <div class="top-i">
          <i class="iconfont icon-search"></i>
          <input type="text" v-model="searchKey" placeholder="搜索视频、番剧、UP主或AV号">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        searchKey: ''
      }
    }
  }
</script>
<style lang="stylus" ref="stylesheet/stylus">
  .search-wrap
    position: fixed
    width: 100%
    top: 0
    bottom: 0
    z-index: 9999
    background: #ffff
    .search-top
      width: 100%
      .top-box
        width: 93.33%
        padding: 0 3.33%
        height: 88px
        .top-i
          position: relative
          width: 88%
          height: 60px
          margin-top: 14px
          font-size: 40px
          .iconfont
            position: absolute
            transform translateY(24px)
            left: 24px
            font-size: 36px
          input
            width:100%
            height: 100%
            box-sizing: border-box
            margin-top: 14px
            font-size: 26px
            padding-left: 80px
            padding-right: 158px
            background-color: #F4F4F4


</style>
