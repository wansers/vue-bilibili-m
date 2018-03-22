<template>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="className"></use>
    </svg>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      className: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .icon
    width: 30px
    height: 30px
    vertical-align: text-bottom
    fill: currentColor
    overflow: hidden
</style>
