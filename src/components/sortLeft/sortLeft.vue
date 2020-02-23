<template>
  <div>
    <ul>
      <li
      :class="activeClass === index?'active':''"
      v-for="(item, index) in cateNavDatas" :key="index"
      @click="changeIndex(index)">
      <router-link :to="`/sort/sortright/${item.id}`">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data() {
          return {
              cateNavDatas : [],
              activeClass : 0
          }
      },
      async mounted() {
        let result = await this.$API.getCateNavList()
        console.log(result)
        this.cateNavDatas = result.categoryL1List
        this.$router.push(`/sort/sortright/${this.cateNavDatas[0].id}`)
      },
      methods: {
          changeIndex(index){
            this.activeClass = index
          }
      },
  }
</script>

<style lang="stylus" scoped>
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
      .active
        color #ab2b2b
        &:before
          content ""
          display block
          width 6px
          height 50px
          position absolute
          background #ab2b2b
</style>
