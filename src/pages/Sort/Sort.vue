<template>
  <div>
      <div id="header">
        <input @click="gotoPath('/search')" type="text" placeholder="搜索商品,共20253款好物">
      </div>
      <div id="app">
      <sortLeft/>
      <sortRight/>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import sortLeft from '../../components/sortLeft/sortLeft'
import sortRight from '../../components/sortRight/sortRight'


  export default {
    components : {
      sortLeft,
      sortRight
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
</style>
