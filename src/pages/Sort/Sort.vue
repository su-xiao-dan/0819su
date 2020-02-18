<template>
  <div>
     <div id="header">
      <input @click="gotoPath('/search')" type="text" placeholder="搜索商品,共20253款好物">
     </div>
     <div id="app">
        <ul>
          <li v-for="(item, index) in cateNavDatas" :key="index">{{item.name}}</li>
        </ul>
      <div class="right">
        <div class="topImg">
          <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png" alt="">
        </div>
        <div class="bottomImg">
          <div class="list" v-for="(listItem, index) in cateLists" :key="index">
            <img :src="listItem.wapBannerUrl" alt="">
            <span>{{listItem.name}}</span>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import cateNavDatas from '../../datas/cateNavDatas.json'
import cateLists from '../../datas/cateLists.json'
  export default {
    data() {
      return {
        cateNavDatas : {},
        cateLists : []
      }
    },
    mounted() {
      this.cateNavDatas = cateNavDatas.categoryL1List
      this.cateLists = cateLists[0].categoryList
    },
    methods: {
      gotoPath(path){
        path !== this.$route.path && this.$router.push(path)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  #header
    width 100%
    height 88px
    border-bottom 1px solid #ddd
    input   
      width 690px
      height 56px
      background #ededed
      color black
      text-align center
      margin 16px 30px
      border-radius 10px
      font-size 28px
  #app
    width 100%
    border-bottom 1px solid #ddd
    box-sizing border-box
    display flex
    ul
      width 162px
      padding 35px 0
      display flex
      flex-direction column
      border-right 1px solid #ddd
      li 
        width 100%
        height 50px
        text-align center
        margin 19.5px 0
        font-size 28px
    .right
      width 528px
      padding 30px
      display flex
      flex-direction column
      .topImg
        width 100%
        height 192px
        margin-bottom 30px
        img 
          width 100%
          height 100%
      .bottomImg
        width 100%
        display flex
        flex-wrap wrap
        .list
          width 30%
          margin 5px
          img 
            width 144px
            height 144px
          span 
            font-size 26px
            text-align center
</style>
