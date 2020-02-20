<template>
  <div id="carContainer">
    <!-- 头部 -->
    <div class="header">
      <span>购物车</span>
      <span>领卷</span>
    </div>

    <!-- 广告 -->
    <div class="content">
      <ul>
        <li>
          <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
          <span>30天无忧退货</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
          <span>48小时快速退款</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>

    <!-- 登录 -->
    <div class="login">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <p>去添加点什么吧</p>
      <button @click="goLogin">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goLogin(){
        this.$router.push('/profile')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  #carContainer
    width 100%
    height 100%
    .header
      width 100%
      height 88px
      padding 0 30px
      box-sizing border-box
      position relative
      span 
        font-size 40px
        line-height 88px
      span:nth-child(2)
        color #ab2b2b
        float right 
        font-size 30px
    .content
      width 100%
      height 72px
      padding 0 20px
      box-sizing border-box
      background #eee
      ul
        display flex
        li
          line-height 72px
          margin 0 20px
          img 
            width 32px
            height 32px
            margin-right 5px
            vertical-align middle
          span
            vertical-align middle
    .login  
      width 100%
      text-align center
      img
        width 248px
        height 248px
        margin 400px 0 0 0
      p
        color #999
      button 
        width 480px
        height 92px
        background #dd1a21
        font-size 30px
        color #fff
        text-align center
        line-height 92px
        margin-top 40px
</style>

