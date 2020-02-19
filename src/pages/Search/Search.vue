<template>
    <div id="searContainer">
        <div class="search">
            <input type="text" placeholder="   这样吃才能更消化">
            <span @click="goBack('/sort')">取消</span>
        </div>
        <div class="hot">
            <span>热门搜索</span>
            <ul>
                <li>
                    <span>疫情新情况</span>
                </li>
                <li>
                    <span>疫情新情况</span>
                </li>
                <li>
                    <span>疫情新情况www</span>
                </li>
                <li>
                    <span>疫情新情况</span>
                </li>
                <li>
                    <span>疫情新情况</span>
                </li>
                <li>
                    <span>疫情新情况</span>
                </li>
                <li>
                    <span>疫情新情况wda</span>
                </li>
                <li>
                    <span>疫情新情况</span>
                </li>
                <li>
                    <span>疫情新情况</span>
                </li>
                <li>
                    <span>疫情新情况</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          goBack(path){
              path !== this.$route.path && this.$router.push(path)
          }
      },
  }
</script>

<style lang="stylus" scoped>
    #searContainer
        width 100%
        height 523px
        .search
            width 100%
            input 
                width 604px
                height 56px
                background #ededed
                font-size 28px
                border-radius 10px
                margin 16px 28px 0
            span 
                font-size 28px
        .hot
            padding 30px
            span 
                font-size 28px
                color #999 
            ul
                display flex
                flex-wrap wrap
                li 
                    border 1px solid #010101
                    margin 26px 22px 4px 0
                    span 
                        font-size 28px
                        line-height 50px
                        color #000
                        margin 0 10px
</style>

