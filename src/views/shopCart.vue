<template>
  <div>
    <van-nav-bar fixed @click-left="onClickLeft" title="购物车" left-arrow>
      <van-icon  slot="right" />
    </van-nav-bar>
 <div class="cart-section" v-if="goods!=0">
    <van-checkbox-group class="card-goods" v-model="checkedGoods" >
      <!-- 复选框组 -->
      <van-checkbox checked-color="#c18347"
        class="card-goods__item"
        v-for="item in goods"
        :key="item._id" 
        :name="item._id">
        <!-- 商品卡片 -->
        <van-card
          v-if="item.product"
          :title="item.product.name"
          :desc="item.product.description"
          :num="item.quantity+item.count"
          :price="item.product.price"
          :thumb="serverUrl+item.product.coverImg"
        />
        <!-- 商品卡片完 -->
      </van-checkbox>
      <ul class="steper">
	      	<li v-for="item in goods" :key="item._id">
            <van-stepper v-model="item.count" />
          </li>
	      </ul>
    </van-checkbox-group>
    <!-- 复选框组完 -->

    <van-submit-bar
      class="sub"
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
      >
    <div class="" @click="checkall"><van-checkbox v-model="allChecked" >全选</van-checkbox></div> 

    </van-submit-bar>
  </div>
  <!--购物车为空-->
    <div class="cart-empty" v-else>
    	 <div class="cart-ico">
    	 	 <i class="van-icon van-icon-cart"></i>
    	 </div>
    	 <p class="empty-warm">您的购物车空空如也...</p>
    	 <router-link to="/">
    	 	 <van-button size="small">去看看</van-button>
    	 </router-link>
    	 
    </div>
  
</div> 
</template>
<script>
import store from '../../vuex/store'
import {mapState} from 'vuex'
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import OrderWriteVue from "./OrderWrite.vue";
import { getShopCart } from "../services/users";
import { getProductDetail } from "../services/products";
import { serverUrl } from "../utils/config";
import { post } from "axios";
import { delFromProduct } from "../services/users";
import axios from 'axios'
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: [],
      goods: [],
      serverUrl,
      allChecked:false,
      flag:true,
      value:1
    };
  },
  watch:{
		//监听单选框，选择状态
		checkedGoods(e,old){
			console.log(e)
			if(this.goods.length == e.length){
				this.allChecked=true
			}
			else{
				this.allChecked=false
			}
			
    }
  },
  	mounted(){
  	this.goods=this.selectGoods
    console.log(this.selectGoods)
  },
  async created() {
    const result = await getShopCart();
    console.log(result)
    this.goods = result.data;
  },
 computed: {
		
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      //有出现则累加，没有则为0
       return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item._id) !== -1 ? (item.product.price*100)*(item.quantity + item.count) : 0), 0);
    },
    ...mapState({
      selectGoods: state => state.selectGoods//绑定store.selectGoods到组件，之后可用this.selectGoods获取
      
   })

  },

  methods: {
    checkall(){
      let arr=[]
			if(this.allChecked){
        console.log(11)
				this.selectGoods.forEach((item, index) => {
			  arr.push(this.selectGoods[index]._id)
			});
			this.checkedGoods=arr
      }else{
      	this.checkedGoods=[]
      }
    },
    onSubmit(){
    	let payGoods = [];
    this.selectGoods.forEach((item, index) => {
    	for(var i=0;i<this.checkedGoods.length;i++){
    		if (this.checkedGoods[i]== this.selectGoods[index].kid) {
	        payGoods.push(this.selectGoods[index]);
//	        this.selectGoods.splice(index, 1);
	      }
    	}
    });

      this.$router.push({name:'OrderWrite'});
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    formatPrice(price) {
      return (price);
    },
    onSubmit() {
      this.$router.push({name:'OrderWrite'})
    },

  }
}
</script>

<style scoped>
.card-goods {
  padding:3.5rem 0.5rem 6rem 0.5rem;
  background-color: #fff;
}

.van-checkbox__icon {
  top: 50%;
  left: 10px;
  z-index: 1;
  position: absolute;
  margin-top: -10px;
}
.van-card__price {
  color: #f44;
}

.steper{
				  position: absolute;
					top: 0;
					right: 4%;
}
.steper li{
  height: 100px;
					padding-bottom: 23px;
					display: flex;
					align-items: flex-end;
}
 .card-goods__item{
   position :relative;
    background-color: #fafafa;
    border-bottom :1px solid #e5e5e5;
    margin-bottom:1rem
 }
.van-checkbox__label {
  width: 100%;
  height: auto;
  padding: 0 10px 0 15px;
  box-sizing: border-box;
}
.sub{
  margin-bottom:3.125rem;
}
.van-submit-bar__bar{
  background-color: #e5e5e5;
   padding:0 0.5rem;
}
.footer{
  position:absolute;
  top: 4rem;
  left: 15rem;
  background-color: #f44
}
.pro-card{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.van-card__num{
  float:none;
}
.cart-empty{
  margin: 290px auto;
  text-align: center;
}
.cart-empty .van-icon{
  color: #f44;
  font-size: 2rem;
}
</style>

