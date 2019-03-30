<template>
  <div class="about">
    
    <van-nav-bar
    
  title="关于小鱼生鲜"
  
  left-arrow
  @click-left="onClickLeft"
  
/>

    <van-cell title="版本检测" is-link />
    <van-cell title="版本信息" is-link />
    <van-cell title="许可使用协议" is-link />
    <van-cell title="隐私权政策" is-link />
    <van-cell title="帮助中心" is-link />
    <img class="logoImg" alt='小鱼生鲜' src='../assets/logo.png'/>
</div>
</template>

<script>
export default {
  methods: {
    onClickLeft(){
      this.$router.go(-1)
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
.logoImg{
  width: 100%;
}

</style>
