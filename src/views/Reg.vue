<template>
  <div class="list">
    <div class="daohang-2">
       <van-nav-bar
  title="注册"
  left-arrow
  @click-left="onClickLeft" 
/>
    </div>
   
   <van-cell-group>
      <van-field v-model="userName" placeholder="请输入手机号码" />
      <van-field
      v-model="sms"
    center
    clearable
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary" class="van">获取</van-button>
  </van-field>
      <van-field v-model="repassword" type="password" placeholder="设置登录密码" />
    </van-cell-group>
    <van-button @click="regHandle" class="btn-login" type="info" size="large" style="background:#d09b6b;border:0">同意协议并注册</van-button>
    <div class="zhece">注册即为同意《小鱼生鲜服务平台协议》</div>
  </div>
</template>
<script>
import { reg } from '../services/users'
import { loginIn } from '../utils/auth'
export default {
  data() {
    return {
      userName: '',
      sms: '',
      repassword: '',
      
    }
  },
  methods: {
  async regHandle() {
    if (!this.userName || !this.sms) {
      alert('请输入账号和密码')
      return
    }
    if (this.sms != this.repassword) {
      alert('两次输入的密码不一致')
      return
    }
    const result = await reg({
      userName: this.userName,
      password: this.repassword,
      avatar:"ddd",
      nickName:"dddd",
    })
    console.log(result)
    if (result.data.code == "success") {
      this.$eventBus.$emit('navToZX','UserCenter')
      this.$router.push({
        name:'Login'
      })
      alert("成功")
    } else {
      alert('注册失败！')
    }
  },
  onClickLeft(){
      this.$router.go(-1)
    },
   
  }
}
</script>
<style>
.daohang-2{
  margin-bottom: 50px;
}
.zhece{
  width:100%;
  text-align: center;
}
.van{
  background: #d09b6b;
  border-radius: 10px;
  border: 0;
}
.van-nav-bar__text{
    color:rgba(40,40,40,1);
  }
  .van-nav-bar .van-icon {
    color:rgba(40,40,40,1);
    vertical-align: middle;
    font-size:26px;
  }
</style>


