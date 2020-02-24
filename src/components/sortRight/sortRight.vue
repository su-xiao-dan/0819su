<template>
  <div>
    <div class="right">
      <div class="topImg">
        <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png" alt="">
      </div>
      <div v-if="cateObj.categoryList" class="bottomImg">
        <div class="list" v-for="(listItem, index) in cateObj.categoryList" :key="index">
          <img :src="listItem.wapBannerUrl" alt="">
          <span>{{listItem.name}}</span>
        </div>
      </div>
      <div v-if="cateObj.subCateList" class="bottomImg">
        <div class="list" v-for="(listItem, index) in cateObj.subCateList" :key="index">
          <img :src="listItem.wapBannerUrl" alt="">
          <span>{{listItem.name}}</span>
        </div>
      </div>
    </div> 
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
      data() {
          return {
            cateObj : {},
            cateList : []
          }
      },
      async mounted() {
        this.cateList = await this.$API.getCateList()
        // console.log(this.cateList)
        //获取路由参数
        this.$route.params.id
        //通过id查询对应的对象
        this.cateObj = this.cateList.find(item => item.id === this.$route.params.id*1)
        //显示数据

      },
      watch: {
        $route(){
          this.cateObj = this.cateList.find(item => item.id === this.$route.params.id*1)
        }
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
