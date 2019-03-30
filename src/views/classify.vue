<template id="classify">
  <div >
    <van-nav-bar @click-left="onClickLeft" fixed title="精品优选"  left-arrow id="navheader">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div id='list-cart'>
    <div id="cartBox">
      <van-badge-group :active-key="activeKey" @change="onChange">
        <van-badge title="全部" />
        <van-badge title="热门水果"/>
        <van-badge title="车厘子"/>
        <van-badge title="瓜类" />
        <van-badge title="现切水果" />
        <van-badge title="葡萄"/>
        <van-badge title="车厘子"/>
        <van-badge title="瓜类" />
        <van-badge title="现切水果" />
        <van-badge title="葡萄"/>
        <div class="carts">
          <div class="cartIcon"><van-icon class="icons" name="shopping-cart-o"/></div>
        </div>
      </van-badge-group>
    </div>
    <div id="l-left">
      <img class="bannerImg"  alt='' src='../assets/01.png'/>
      <div class="box">
      <van-card
      class="listCart"
      v-for='product in products'
      :num="product.quantity"
      :price="product.price"
      :desc="product.descriptions"
      :title="product.name"
      :thumb=" serverUrl +product.coverImg"
      :key="product._id"
      :thumb-link="`#/classify/${product._id}`"
    >
    <div slot="footer">
      <van-button size="mini" @click="addToCartHandle(product._id)">
        <van-icon name="shopping-cart-o" class="cart" />
      </van-button>
    </div>
    </van-card>
    <van-button size="large" @click='loadMore' class="more">查看更多</van-button></div>
    </div>
  </div>
    
  </div>
</template>
<script>
import { getProducts } from '../services/products';
import { serverUrl } from '../utils/config';
export default {
  data() {
    return {
      products:[],
      activeKey: 0,
      page:1,
      pageCount:1,
      serverUrl,
    };
  },
  created(){
    this.loadData()
  },
  methods: {
    addToCartHandle(id){
      addToShopCart(id,1)
      this.$eventBus.$emit('addToShopCartEnd');
    },
    loadMore(){
      this.page += 1
      this.loadData()
    },
    loadData(){
      //get(`${serverUrl}/api/v1/products?page=${this.page}`)
      getProducts({ page:this.page })
      .then(res => {
        console.log(res)
        // 拼接服务器端的数据 使用数组的concat方法实现
        this.products = this.products.concat(res.data.products)
        this.pageCount = res.data.pages
      })
      .catch(err => {
        
      })
    },
    onClickLeft(){
      this.$eventBus.$emit('navToZX', 'Home')
      this.$router.push({
        name:"Home"
      })
    },
    onChange(key) {
      this.activeKey = key;
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
  .van-badge {
    width:100px;
    height:43px;
    line-height:1.25px;
    text-align: center;
  }
  .carts{
    width: 100px;
    height: 76px;
    background: #ccc;
    position: relative;
  }
  .icons{
    font-size: 30px;
    top:20%;
    left:17%;
    color:#cd986a;
    
  }
  .cartIcon{
    width: 44px;
    height: 44px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top:25%;
    left:27%;
  }
 #cartBox{
  padding-left: 3%;
  height: 100%;
  }
  
  .bannerImg{
    width:97%;
    height: 53px;
    display: block;
    float: left;
    top:50px;
    right:0;
    padding: 1% 2%;
    overflow: hidden;
    border-radius: 16px;
  }
  #list-cart{
    margin-top: 60px;
    display: flex;
    width: 100%;
    height: auto;
    
  }
  #l-left{
    overflow:auto;
    max-height: 541px;
    padding-bottom: 37px;
  }
  ::-webkit-scrollbar {
            width: 0px;
        }
  .listCart{
    width: 97%;
    margin: 1% 2%;
    overflow: hidden;
    right:0;
    float: left;
    background-color: #fff;
  }
  .cart{
    font-size: 1.2rem;
    color:#ff6700;
  }
  .more{
    border: 0;
  }
</style>