<template>
 <div id="app">
   <m-header></m-header>
   <m-table></m-table>
   <keep-alive>
     <router-view></router-view>
   </keep-alive>
 </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from "components/m-header/m-header"
  import MTable from "components/m-table/m-table"
  export default {
    components: {
      MHeader,
      MTable
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/reset"
  @import "common/stylus/variable"

  #app
    background-color: $color-background
    .fix-top
      width: 100%
      height: 176px
</style>
