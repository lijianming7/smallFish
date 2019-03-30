<template>
  <div>
    <van-nav-bar @click-left="onClickLeft" title='新增地址' fixed  left-arrow id="navheader"/>
    <van-cell-group>
      <van-field
        v-model="receiver"
        clearable
        placeholder="收货人"
      />

      <van-field
        v-model="mobile"
        type="text"
        placeholder="手机号码"
      />
      <van-field
        v-model="regions"
        type="text"
        placeholder="所在地区"
      />
     
      <van-field
        v-model="address"
        type="textarea"
        placeholder="请输入详细街道、门牌号、单元等"
        rows="3"
        autosize
      />
      <div class="moren">
        <van-field
        v-model="idDefault"
        label="设为默认地址"
      />
    
      <van-switch
        v-model="checked"
        size="24px"
        active-color="#0f0"
        inactive-color="#ccc"
      />
      </div>
    </van-cell-group>
    <p class="del">删除收货地址</p>
    <van-button size="large" class="btn" @click="AddAddress">保存</van-button>
  </div>
</template>

<script>
import { addAdress } from '../services/address'
import { getToken } from '../utils/auth'
import { post } from '../utils/request.js'
import { serverUrl } from '../utils/config'
import { Toast } from 'vant';
export default {
  data() {
    return {
      receiver:'',
      mobile:'',
      regions:'',
      address:'',
      idDefault:'',
      checked: false,

    };
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    AddAddress(){
      post(`${serverUrl}/api/v1/addresses`,{
        receiver:this.receiver,
        mobile:this.mobile,
        regions:this.regions,
        address:this.address,
        idDefault:this.idDefault
      },
      {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    })
    .then(res => {
        Toast("新增成功")
      })
      .catch(err => {
        console.log("先登录")
      })
    }
  }
}
</script>
<style scoped>
  .van-nav-bar .van-icon {
    color:rgba(40,40,40,1);
    vertical-align: middle;
    font-size:26px;
  }
  .van-cell-group{
    padding-top: 60px;
  }
  .van-cell{
    padding:15px;
  }
  .moren{
    display: flex;
    justify-content: center;
    padding: 0 10px;
  }
  .van-switch{
    margin-top: 16px;
  }
  .del{
    color: #f00;
    padding-left: 22px;
  }
  .btn{
    background-color:#bd7a36;
    color: #fff;
    border-radius: 15px;
    margin: 20px 10px;
    width: 95%;
  }
</style>
