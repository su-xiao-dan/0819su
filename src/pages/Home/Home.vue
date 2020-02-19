<template>
  <div id="wrap">
    <!-- 头部 -->
    <div id="header">
      <div class="headerTop">
        <span class="logo">网易严选</span>
        <input @click="gotoPath('/search')" type="text" placeholder="搜索商品,共20253款好物">
        <button>登录</button>
      </div>
      <div class="headerBottom">
        <ul class="listItem">
          <li>推荐</li>
          <li v-for="(item, index) in cateNavDates" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <img v-for="(image, index) in cateNavDates" :key="index" class="swiper-slide" :src="image.imgUrl" alt="">
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- 广告 -->
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

    <!-- 列表导航 -->
    <div id="listNav">
      <ul>
        <li v-for="(listNav, index) in listNavData" :key="index">
          <a :href="listNav.schemeUrl">
            <img :src="listNav.picUrl" alt="">
            <span>{{listNav.text}}</span>
          </a>
        </li>
      </ul>
    </div>
    
    <!-- 防疫专区 -->
    <div id="png">
      <img src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png" alt="">
      <div class="png01">
        <img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif" alt="">
      </div>
      <div class="ceil">
        <img src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png" alt="">
        <img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png" alt="">
      </div>
      <div class="floor">
        <img src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png" alt="">
        <img src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png" alt="">
      </div>
    </div>
    <div class="placeholder"></div>

    <!-- 优惠卷 -->
    <div class="youhui">
      <div class="xinren">— 新人专享礼 —</div>
      <div class="content">
        <div class="left">
          <span>新人专享红包</span>
          <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
        </div>
        <div class="right">
          <div class="fulishe" v-for="(module, index) in indexActivityModule" :key="index">
            <span>{{module.title}}</span>
            <br/>
            <br/>
            <p>{{module.subTitle}}</p>
            <p>{{module.tag}}</p>
            <img src="https://yanxuan-item.nosdn.127.net/0fd9f9e40f287ecfe3b54aaafda914f6.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="placeholder"></div>

    <!-- 热销 -->
    <div class="sellWell">
      <div class="sellWellHeader">
        <span>类目热销榜</span>
      </div>
      <div class="sellWellFooter">
        <ul class="listSell">
          <li v-for="(categoryItem, index) in categoryList" :key="index">
            <a :href="categoryItem.targetUrl">
              <span>{{categoryItem.categoryName}}</span>
              <img :src="categoryItem.showPicUrl" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="placeholder"></div>
    
    <!-- 限时购物 -->
    <div class="timeBuy">
      <div class="timeBuyHeader">
        <span>限时购</span>
        <CountTime/>
        <span>更多 ></span>
      </div>
      <div class="timeBuyFooter">
        <ul>
          <li v-for="(timeBuyFooterItem, index) in timeBuyFooter" :key="index">
            <img :src="timeBuyFooterItem.picUrl" alt="">
            <span>￥{{timeBuyFooterItem.activityPrice}}</span>
            <span>￥{{timeBuyFooterItem.originPrice}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="placeholder"></div>


  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import indexCateModule from '../../datas/indexCateModule.json'
import listNavData from '../../datas/index.json'
import CountTime from '../../components/CountTime/CountTime'
  export default {
    data() {
      return {
        cateNavDates : [],
        listNavData : {},
        indexActivityModule :[],
        categoryList : [],
        timeBuyFooter : []
      }
    },
    components:{
      CountTime
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
      this.listNavData = listNavData.kingKongModule.kingKongList
      this.indexActivityModule = listNavData.indexActivityModule
      this.categoryList = listNavData.categoryHotSellModule.categoryList
      this.timeBuyFooter = listNavData.flashSaleModule.itemList
    },
    methods: {
      gotoPath(path){
        path !== this.$route.path && this.$router.push(path)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  #wrap
    height 4000px
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
  #listNav
    width 100%
    height 340px
    border-top 1px solid #eee
    // box-sizing border-box
    padding-bottom 32px
    ul
      display flex
      flex-wrap wrap
      width 100%
      height 100%
      li
        display flex
        height 50%
        margin 0 20px
        flex-direction column
        a
          width 110px
          height 110px
          img 
            width 110px
            height 110px
          span 
            line-height 40px
            margin-left 7px
  #png
    width 100%
    height 828px
    img 
      width 100%
      height 240px
    .png01
      width 710px
      height 160px
      margin-top -3px
      border-left 20px solid #1674e3
      border-top 20px solid #1674e3
      border-right 20px solid #1674e3
      border-bottom 10px solid #1674e3
      img
        width 710px
        height 160px
    .ceil
      width 710px
      height 186px
      border-left 20px solid #1674e3
      border-right 20px solid #1674e3
      border-bottom 10px solid #1674e3
      img   
        width 50%
        height 100%
        box-sizing border-box
      img:nth-child(1)
        border-right 6px solid #1674e3
    .floor
      width 710px
      height 186px
      border-left 20px solid #1674e3
      border-right 20px solid #1674e3
      border-bottom 20px solid #1674e3
      img   
        width 50%
        height 100%
        box-sizing border-box
      img:nth-child(1)
        border-right 6px solid #1674e3
  .placeholder
    width 100%
    height 20px
    background #eee
  .youhui
    width 750px
    height 558px
    padding 30px 32px
    box-sizing border-box
    .xinren 
      font-size 34px
      text-align center
      margin-bottom 24px
    .content
      width 100%
      height 438px
      display flex
      .left
        width 340px
        height 434px
        background #f9e9cf
        border-right 5px solid #fff
        box-sizing border-box
        span 
          font-size 32px
          margin-left 30px
          line-height 90px
        img
          width 258px
          height 257px
          margin-top 30px
          margin-left 40px
      .right
        width 140px
        height 410px
        .fulishe
          width 343px
          height 220px
          background #fbe2d3
          padding-top 20px
          padding-left 20px
          border-bottom 5px solid #fff
          box-sizing border-box
          position relative
        .fulishe:nth-child(2)
          background #ffecc2
        span 
          font-size 30px
        p 
          font-size 22px
        img
          width 200px
          height 200px
          position absolute
          right 0
          bottom -4px
  .sellWell
    width 100%
    height 710px
    padding 30px
    box-sizing border-box
    .sellWellHeader
      height 80px
      span 
        font-size 35px
        line-height 80px
    .sellWellFooter
      width 100%
      height 610px
      .listSell
        display flex
        flex-wrap wrap
        li:nth-child(-n+2)
          width 49%
          border 3px solid #fff
          background #F9F3E4
          span 
            font-size 32px
            margin 0 20px
          img
            width 200px
            height 200px
            vertical-align middle
        li:nth-child(n+3)
          width 25%
          border 5px solid #fff
          padding 5px
          box-sizing border-box
          display flex
          flex-direction column
          text-align center
          background #f5f5f5
          span  
            font-size 20px
            margin 5px 21px 0
          img     
            width 120px
            height 120px
            margin-left 22px
  .timeBuy
    width 100%
    height 700px
    padding 30px
    box-sizing border-box
    .timeBuyHeader
      width 100%
      height 100px
      display flex
      span  
        font-size 37px
      span:last-child
        margin-left 310px
        font-size 26px
    .timeBuyFooter
      width 100%
      height 600px
      ul 
        display flex
        flex-wrap wrap
        li  
          width 31%
          margin 0 10px 10px 0
          img 
            width 216px
            height 216px
            background #eee
          span  
            font-size 30px
            text-align center
            color #dd1a21
          span:last-child
            text-decoration line-through
            color #ccc
            font-size 26px
            margin-left 10px
</style>
