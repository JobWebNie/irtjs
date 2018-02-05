<template>
  <!-- 这个页面是主页的banner -->
  <div class="zhuanjiaMain">
    <zhuanjiaBanner></zhuanjiaBanner>
    <yuanxiaoMain></yuanxiaoMain>
    <ruzhuMainPeople></ruzhuMainPeople>
  </div>
</template>

<script>
  import zhuanjiaBanner from './zhuanjiaMain/zhuanjiaBanner'
  import yuanxiaoMain from './zhuanjiaMain/yuanxiaoMain'
  import ruzhuMainPeople from './zhuanjiaMain/ruzhuMainPeople'
  export default {
    name: 'zhuanjiaMain',
    data() {
      return {
      }
    },
    methods: {
    },
    components: {
        zhuanjiaBanner,
        yuanxiaoMain,
        ruzhuMainPeople
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

</style>
