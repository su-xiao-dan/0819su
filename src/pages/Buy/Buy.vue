<template>
  <div id="buyContent">
     <div class="buyHeader">
      <i @click="goHome()" class="iconfont icon-shouye"></i>
      <span>值得买</span>
      <i @click="goSearch()" class="iconfont icon-sousuo"></i>
      <i @click="goCar()" class="iconfont icon-cart-Empty"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goHome(){
        this.$router.push('/home')
      },
      goSearch(){
        this.$router.push('/search')
      },
      goCar(){
        this.$router.push('/car')
      },
    },
  }
</script>

<style lang="stylus">
  #buyContent
    width 100%
    .buyHeader
      width 100%
      height 88px
      background-color #fafafa
      padding 0 16px 0 24px
      box-sizing border-box
      .iconfont
        font-size 55px
        line-height 88px
      .iconfont:last-child
        margin-left 40px
      span 
        font-size 40px
        margin 0 160px 0 200px
</style>

