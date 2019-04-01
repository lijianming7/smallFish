<template>
  <div>
    <van-nav-bar @click-left="onClickLeft" fixed  left-arrow title='修改收货地址'/>
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
    </van-cell-group>
    <van-button size="large" class="btn" @click="saveAddr()">确定</van-button>
    <van-button size="large" class="btn delbtn" @click="dellAddr()">删除地址</van-button>
    
    
  </div>
  
</template>

<script>
import {getaddressDetail} from '../services/address'
import {serverUrl} from '../utils/config'
import { post, del , put} from '../utils/request';
import { getToken } from '../utils/auth'
import { Toast } from 'vant';

export default {
  data() {
    return {
      receiver:'',
      mobile:'',
      regions:'',
      address:'2222'
    };
  },
  create(){

  },
  methods:{
   onClickLeft(){
      this.$router.go(-1)
    },
    saveAddr(){
      put(`${serverUrl}/api/v1/addresses/${this.$route.params.id}`,{
          receiver:this.receiver,
          mobile:this.mobile,
          regions:this.regions,
          address:this.address,
          idDefault:false
        },{
          headers: {
            authorization: `Bearer ${getToken()}`
          }
        })
        .then(res => {
          Toast('修改成功')
          this.$router.push({
            name:'AddressList'
          })
        })
        .catch(err => {
          Toast('操作失败')
          console.log(err)
        })
    },
    dellAddr(){
      //console.log(this.$route.params.id)
      //console.log(getToken())
      del(`${serverUrl}/api/v1/addresses/${this.$route.params.id}`,
        {
          headers: {
            authorization: `Bearer ${getToken()}`
          }
        })
        .then(res => {
          Toast('已删除')
          this.$router.push({
            name:'AddressList'
          })
        })
        .catch(err => {
          Toast('操作失败')
          console.log(err)
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
  .van-nav-bar__text{
     color:rgba(40,40,40,1);
  }
  .van-address-list{
    padding-top: 60px;
  }
  .van-cell-group{
    padding-top: 60px;
  }
  .van-cell{
    padding:15px;
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
  .delbtn{
    background-color:#f00;
    color: #fff;
    border-radius: 15px;
    margin: 5px 10px;
    width: 95%;
  }
</style>
