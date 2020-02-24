<template>
  <div id="buyContainer">
    <div class="buyHeader">
      <i @click="goHome()" class="iconfont icon-shouye"></i>
      <span>值得买</span>
      <i @click="goSearch()" class="iconfont icon-sousuo"></i>
      <i @click="goCar()" class="iconfont icon-cart-Empty"></i>
    </div>
    <div class="buyContent">
      <img src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
      <span>严选好物 用心生活</span>
      <img src="http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
    </div>
    <div class="scroll">
      <div class="scrollItem" v-for="(item, index) in navList" :key="index">
        <img :src="item.picUrl" alt="">
        <span>{{item.mainTitle}}</span>
        <span>{{item.viceTitle}}</span>
      </div>
    </div>
    <div class="box">
      <div class="item" v-for="(listItem, index) in getBuyListItem1.topics" :key="index">
          <img  :src="listItem.picUrl" alt="" />
          <span>{{listItem.title}}</span>
          <div>
            <img :src="listItem.avatar" alt="">
          </div>
      </div>
      <div class="item" v-for="(listItem, index) in getBuyListItem2.topics" :key="index">
          <img  :src="listItem.picUrl" alt="" />
          <span>{{listItem.title}}</span>
          <div>
            <img :src="listItem.avatar" alt="">
          </div>
      </div>
      <div class="item" v-for="(listItem, index) in getBuyListItem3.topics" :key="index">
          <img  :src="listItem.picUrl" alt="" />
          <span>{{listItem.title}}</span>
          <div>
            <img :src="listItem.avatar" alt="">
          </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        navList : [],
        getBuyListItem1 : [],
        getBuyListItem2 : [],
        getBuyListItem3 : []
      }
    },
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
    async mounted() {
      let result = await this.$API.getBuyList()
      console.log(result)
      this.navList = result.data.navList
      let getBuyListItem = await this.$API.getBuyListItem()
      console.log(getBuyListItem)
      this.getBuyListItem1 = getBuyListItem.data[0]
      this.getBuyListItem2 = getBuyListItem.data[1]
      this.getBuyListItem3 = getBuyListItem.data[2]
    },
  }
</script>

<style lang="stylus">
  #buyContainer
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
    .buyContent
      width 100%
      height 518px
      position relative
      img:last-child
        width 100%
        height 518px
        position absolute
        left 0
        top 0
      img:first-child
        width 130px
        height 70px
        position absolute
        left 10px
        top 50px
        z-index 99
      span  
        position absolute
        left 180px
        top 80px
        z-index 99
        color #ffffff
        font-size 28px
    .scroll
      width 710px
      height 540px
      border-radius 20px
      background #fff
      margin 0 auto
      transform translateY(-370px)
      display flex
      flex-wrap wrap
      padding 0 30px
      box-sizing border-box
      overflow hidden
      .scrollItem
        width 25%
        height 235px
        display flex
        flex-direction column
        text-align center
        margin-top 30px
        img 
          width 120px
          height 120px
          margin-left 20px
        span 
          font-size 30px
          color #333
          margin 5px 0
        span:last-child
          font-size 24px
          color #999
    .box 
      margin 10px
      column-count 2
      column-gap 10px
      transform translateY(-400px)
      .item 
        margin 20px 0
        img
          width 100%
          height 100%
        div
          img 
            width 48px
            height 48px
</style>

