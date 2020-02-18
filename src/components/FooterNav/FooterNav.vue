<template>
  <div id="footerContainer">
      <div :class="{active:$route.path === '/home'}" @click="goPath('./home')" class="navItem">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
      </div>
      <div :class="{active:$route.path === '/sort'}" @click="goPath('./sort')" class="navItem">
          <i class="iconfont icon-viewlist"></i>
          <span>分类</span>
      </div>
      <div :class="{active:$route.path === '/buy'}" @click="goPath('./buy')" class="navItem">
          <i class="iconfont icon-default-template"></i>
          <span>值得买</span>
      </div>
      <div :class="{active:$route.path === '/car'}" @click="goPath('./car')" class="navItem">
          <i class="iconfont icon-cart-Empty"></i>
          <span>购物车</span>
      </div>
      <div :class="{active:$route.path === '/profile'}" @click="goPath('./profile')" class="navItem">
          <i class="iconfont icon-usercenter"></i>
          <span>我的</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          goPath(path){
              path !== this.$route.path && this.$router.push(path)
          }
      }
  }
</script>

<style lang="stylus">
    #footerContainer
        display flex
        position fixed
        left 0
        bottom 0
        width 100%
        background #fff
        .navItem
            width 20%
            height 98px
            text-align center
            display flex
            flex-direction column
            &.active
                color green 
            .iconfont
                font-size 49px
                line-height 52px
</style>
