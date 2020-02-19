<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav'
export default {
  name: 'app',
  components: {
    FooterNav
  }
}
</script>

<style>

</style>
