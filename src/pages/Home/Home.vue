<template>
  <div>
    <div id="header">
      <div class="headerTop">
        <span class="logo">网易严选</span>
        <input type="text" placeholder="搜索商品,共20253款好物">
        <button>登录</button>
      </div>
      <div class="headerBottom">
        <ul class="listItem">
          <li>推荐</li>
          <li v-for="(item, index) in cateNavDates" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <img v-for="(image, index) in cateNavDates" :key="index" class="swiper-slide" :src="image.imgUrl" alt="">
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div id="content">
      <ul>
        <li>
          <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
          <span>网易自营品牌</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
          <span>30天无忧退货</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import indexCateModule from '../../datas/indexCateModule.json'
  export default {
    data() {
      return {
        cateNavDates : []
      }
    },
    mounted() {
      new BScroll('.headerBottom',{
        scrollX : true
      })
      new Swiper('.swiper-container', {
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        loop : true,
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
      })
      this.cateNavDates = indexCateModule
    },
  }
</script>

<style lang="stylus">
  #header
    width 100%
    .headerTop
      display flex
      width 100%
      height 88px
      justify-content space-between
      .logo
        font-size 36px
        font-weight 700
        line-height 88px
        margin-left 20px
        font-family '楷体'
        color #777
      input 
        width 442px
        height 56px
        background #eee
        margin-top 15px
        border-radius 5px
        text-align center
        font-size 28px
      button
        width 74px
        height 40px
        border 1px solid red
        margin-top 20px
        color red
        font-size 22px
        background #ffffff
        margin-right 24px
        border-radius 7px
    .headerBottom
      width 100%
      height 60px
      background #ddd
      overflow hidden
      background #fff
      position relative
      .listItem
        width 1460px
        display flex
        white-space: nowrap
        li
          width 144px
          height 60px
          font-size 27px
          font-weight 700
          text-align center
          line-height 60px
          padding 0 5px
          box-sizing border-box
          margin 0 10px
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      width 100%
      height 370px
      .swiper-slide 
        width 100%
        height 100%
  #content
    width 100%
    height 72px
    padding 0 20px
    box-sizing border-box
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
</style>
