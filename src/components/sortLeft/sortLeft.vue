<template>
  <div>
        <ul>
            <li
            :class="activeClass === index?'active':''"
            v-for="(item, index) in cateNavDatas" :key="index"
            @click="changeIndex(index)">{{item.name}}</li>
        </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import cateNavDatas from '../../datas/cateNavDatas.json'
  export default {
      data() {
          return {
              cateNavDatas,
              activeClass : 0
          }
      },
      computed: {
          ...mapState({
            listId: state => state.listId,
          })
      },
      mounted() {
        this.cateNavDatas = cateNavDatas.categoryL1List
      },
      methods: {
          changeIndex(index){
            this.activeClass = index
            let listId = this.cateNavDatas[index].id
            this.$store.commit('save_listid',listId)
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
