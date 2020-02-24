<template>
  <div>
    <div class="profileHeader">
      <i @click="goHome()" class="iconfont icon-shouye"></i>
      <span>网易严选</span>
      <i @click="goSearch()" class="iconfont icon-sousuo"></i>
      <i @click="goCar()" class="iconfont icon-cart-Empty"></i>
    </div>
    <div class="headerImg">
      <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <div class="footer">
      <input type="text" placeholder="邮箱账号">
      <input type="password" placeholder="密码">
    </div>
    <div class="text">
      <span>注册账号</span>
      <span>忘记密码</span>
    </div>
    <div class="btn">
      <button>登录</button>
    </div>
    <div class="footerSpan" @click="goProfile()">
      <span>其他方式登录></span>
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
      goProfile(){
        this.$router.push('/profile')
      }
    },
  }
</script>

<style lang="stylus">
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
    .headerImg
      width 100%
      height 90px
      padding 0 240px
      margin 50px 0 150px 0
      box-sizing border-box
      img 
        width 268px
        height 90px
    .footer
      padding 0 30px
      input 
        width 685px
        height 42px
        font-size 30px
        color #e3e3e3
        border-bottom 1px solid #ccc
        margin 30px 0
    .text 
      padding 0 30px
      span 
        font-size 30px
        margin 20px 0 40px 0
      span:first-child
        float left
      span:last-child
        float right
    .btn 
      padding 0 30px
      button 
        width 685px
        height 90px
        background #dd1a21
        color rgba(255,255,255,0.5)
        border-radius 10px
        font-size 32px
    .footerSpan
      text-align center
      margin-top 40px
      span 
        font-size 30px
</style>
