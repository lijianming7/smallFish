<template>
  <div class="about">
    
    <van-nav-bar
    
  title="设置"
  
  left-arrow
  @click-left="onClickLeft"
  
/>

    <van-cell @click='aboutHandle' title="关于我们" is-link />
    <van-cell @click='addresstHandle' title="我的地址" is-link />
    <van-cell title="通用" is-link />
    <van-cell title="隐私" is-link />
    <van-cell title="注销账户" is-link />
</div>

</template>

<script>
export default {
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    aboutHandle(){
      this.$router.push({
        name:'About'
      })
    },
    addresstHandle(){
      this.$router.push({
        name:'AddressList'
      })
    },
  }
}
</script>

<style>
.van-nav-bar__text{
  color: #000;
  
}
.van-nav-bar{
  margin-bottom:10px;
}
</style>
