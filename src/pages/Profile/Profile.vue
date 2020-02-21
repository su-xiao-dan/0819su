<template>
  <div id="profileContent">
    <div class="profileHeader">
      <i @click="goHome()" class="iconfont icon-shouye"></i>
      <span>网易严选</span>
      <i @click="goSearch()" class="iconfont icon-sousuo"></i>
      <i @click="goCar()" class="iconfont icon-cart-Empty"></i>
    </div>
    <div class="profileFooter">
      <div class="imgButton">
        <div class="img">
          <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        <div class="btn">
          <button>手机号快速登录</button>
          <button>邮箱账号登录</button>
        </div>
      </div>
      <div class="thirdWrap">
        <div>
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
          <span class="shu">|</span>
        </div>
        <div>
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
          <span class="shu">|</span>
        </div>
        <div>
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
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
      }
    },
  }
</script>

<style lang="stylus">
  #profileContent
    width 100%
    .profileHeader
      width 100%
      height 88px
      background-color #fafafa
      padding 0 16px 0 24px
      box-sizing border-box
      .iconfont
        font-size 55px
        line-height 88px
      .iconfont:last-child
        margin-left 20px
      span 
        font-size 40px
        margin 0 160px 0 200px
    .profileFooter
      width 100%
      background #f2f5f4
      position relative
      height 1246px
      .imgButton
        width 100%
        height 700px
        .img
          width 100%
          text-align center
          img   
            width 268px
            height 90px
            padding 160px 0 232px
        .btn
          display flex
          flex-direction column
          padding 0 37.5px
          button
            width 670px
            height 92px
            text-align center
            font-size 30px
            margin-bottom 30px
            border 1px solid red
            color #fff
          button:first-child
            background #dd1a21
          button:last-child
            color #dd1a21
            background #f2f5f4
      .thirdWrap
        width 100%
        height 40px
        position absolute
        left 0
        bottom 72px
        display flex
        justify-content space-between
        padding 0 140px
        box-sizing border-box
        div 
          color #7f7f7f
          .iconfont 
            font-size 40px
            margin-right 10px
          .shu
            font-size 40px
            margin-left 20px
            z-index 10
</style>

