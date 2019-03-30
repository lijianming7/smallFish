<template>
  <div class="list">
    <div class="daohang-1">
      <van-nav-bar
        title="登录到小鱼生鲜"
        right-text="注册"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    
    <van-cell-group>
      <van-field v-model="userName" placeholder="请输入手机号码" />
      <van-field v-model="password" type="password" placeholder="请输入登录密码" />
    </van-cell-group>

      <div class="pic">
        <van-checkbox v-model="checked">自动登录</van-checkbox>
      </div>

    <van-button @click="loginHandle" class="btn-login" type="info" size="large" style="background:#d09b6b;border:0;margin-top:15px">登录</van-button>
    <div class="denglu-2">登录即为同意《小鱼生鲜服务平台协议》</div>
  </div>
</template>
<script>
import { loginIn } from '../utils/auth'
import { isLogined } from '../utils/auth'
import { post } from 'axios'
import { serverUrl } from '../utils/config'
export default {
  data() {
    return {
      checked:'',
      userName: '',
      password: '',
    }
  },
  methods:{
    onClickLeft(){
      this.$router.push({
        name:'UserCenter'
      })
    },
    onClickRight(){
      this.$router.push({
        name:'Reg'
      })
    },
    loginHandle() {
      post(`${serverUrl}/api/v1/auth/login`, {
        userName: this.userName,
        password: this.password
      })
        .then(res => {
          if(res.data.code=="success"){
            this.$eventBus.$emit('navToZX', 'UserCenter')
            this.$router.push({
              name:"UserCenter"
            })
            console.log(res.data.token)
            loginIn(res.data.token)
          }else{
            alert("登陆失败")
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style>
.btn-login {
  margin: 0.5rem 0;
  border-radius: 20px;
}
.daohang-1{
  margin-bottom: 50px;
}
.pic{
  margin-top: 10px;
}
.denglu-2{
  width:100%;
  text-align: center;
}


</style>


