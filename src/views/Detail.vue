<template>
<div>
  <van-nav-bar @click-left="onClickLeft" fixed  left-arrow id="navheader"/>
  <div class="goods">
        <img :src='serverUrl+product.coverImg'>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ this.product.name }}</div>
        <div class="goods-price">{{ '￥' + this.product.price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">数量：{{ this.product.quantity }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">小鱼生鲜</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="service-o" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addshopCartHandle(product._id)">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>
  </div>

  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
import {getProductDetail} from '../services/products'
import {serverUrl} from '../utils/config'
import {addToshopCart} from '../services/users'
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
     product:{},
     serverUrl,
      }
    },
  created(){
      getProductDetail(this.$route.params.id)
      .then(res=>{
        this.product = res.data;
      })
      .catch(err=>{

      })
  },
  methods: {
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push({
        name:"ShopCart",
      })
    },
    sorry() {
      Toast('暂无后续逻辑~');
    },
    addshopCartHandle(product) {
      if(sessionStorage.getItem('token')) {
        // 调用加入购物车
        //alert(sessionStorage.getItem('token'))
        addToshopCart(product,1)
          .then(res => {
           /*  console.log(res)
            alert(res.data.message) */
            Toast(res.data.message);
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        // 跳转到登录页
        // alert('需要先登录')
        this.$router.push({
          name:'Login'
        })
      }

      this.$eventBus.$emit('addToShopCartEnd')
    },
    onClickLeft(){
      this.$router.push({
        name:"Classify"
      })
    }
  }
};
</script>

<style scoped>
  .goods {
    padding:50px 0 132px 0;
    }
  .goods img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .goods-swipe .goods-title{
    font-size: 16px;
  }
  .goods-swipe .goods-price{
    color: #f44;
  }
  .goods-swipe .goods-express{
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  .goods-swipe .goods-cell-group{
    margin: 15px 0;
  }
  .goods-swipe .goods-cell-group .van-cell__value{
    color: #999;
  }
  .goods-swipe .goods-tag {
    margin-left: 5px;
  }
  .van-goods-action {
    bottom: 49px;
  }
  .van-nav-bar .van-icon {
    color:rgba(40,40,40,1);
    vertical-align: middle;
    font-size:26px;
  }
  .goods-descriptions{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .coverImg{
    width: 100%;
  }
  .coverImg img{
    width: 100%;
  }
</style>
