<template>
  <div>
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
</template>

<script type="text/ecmascript-6">
import cateLists from '../../datas/cateLists.json'
  export default {
      data() {
          return {
            cateLists : [],
          }
      },
      mounted() {
        this.cateLists = cateLists[0].categoryList
      },
  }
</script>

<style lang="stylus" scoped>
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
