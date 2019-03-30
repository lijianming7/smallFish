<template>
  <div>
    <router-view />
    <div class="nav-bar">
      <!-- active表示当前tabbar选中的索引 -->
      <van-tabbar v-model="active" active-color="deeppink" @change="navChangeHandle">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="hot-o" dot>分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" :info="shopCartCount">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o">我</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
  
</template>

<script>
import {getShopCartCount}  from './services/users'
export default {
  data() {
    return {
      active: 0,
      shopCartCount:0
    }
  },
  methods: {
    navChangeHandle() {
      // alert(this.active)
      switch(this.active) {
        case 0:
          this.$router.push({
            name: 'Home'
          })
        break;
        case 1:
          this.$router.push({
            name: 'Classify'
          })
        break;
        case 2:
          this.$router.push({
            name: 'ShopCart'
          })
        break;
        case 3:
          this.$router.push({
            name: 'UserCenter'
          })
        break;
      }
    }
  },
  created() {
    this.$eventBus.$on('navToZX', (link) => {
      if (link == 'UserCenter') {
        this.active = 3;
      }
      if (link == 'Home') {
        this.active = 0;
      }
    })
    this.$eventBus.$on('addToShopCartEnd',() =>{
      this.shopCartCount = getShopCartCount()
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
