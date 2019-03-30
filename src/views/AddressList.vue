<template>
  <div>
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight" fixed 
     left-arrow title='我的收货地址' right-text='新增地址'/>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
  
</template>

<script>
import { getToken } from '../utils/auth'
import { get } from '../utils/request.js'
import { serverUrl } from '../utils/config'


export default {
   data() {
    return {
      disabledList:[],
      per:10,
      page:1,
      chosenAddressId: '1',
      list: []
    }
  },
  created(){
    const addressList = []
    const addr = {ad:''}
    this.loadAddress()
  },
  methods: {
    onClickLeft(){
      this.$router.push({
        name:'UserCenter'
      })
    },
    onClickRight(){
      this.$router.push({
        name:'Address'
      })
    },
    onAdd() {
      this.$router.push({
        name:'Address'
      })
    },

    onEdit(item, index) {
      console.log(item.id)
      console.log(index)
      this.$router.push( {
        name:'reAddress',
        params: {
          id:item.id
        },
        /* 嵌套参数 */
        /* query:{
          name:`${this.list}`
        } */
      }
      //`/reAddress/${item.id}`
      )
    },
    loadAddress(){
    console.log(getToken())
     //get(`${serverUrl}/api/v1/products?page=${this.page}`)
      get(`${serverUrl}/api/v1/addresses`, {
        headers: {
          authorization: `Bearer ${getToken()}`
        }
      }
    )
      .then(res => {
        var b = []
        var c = {}
        this.addressList = res.data.addresses
        console.log(this.addressList)
        this.addressList.forEach((item,ind)=>{
          c = {id:item._id,name:item.receiver,tel:item.mobile,address:`${item.regions}${item.address}`}
          b.push(c)
        })
        this.list=b
      })
      .catch(err => {
        console.log(err)
      })
    },
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
  .van-button--danger{
    background-color: #bd7834;
    border: 0;
  }
</style>
