<template>
  <div class="main">
    <!-- 头部布局 -->
    <div class="head">
      <div class="left_">
        <van-icon name="user-circle-o" class="usercenter"/>
        <div class="link">
          <router-link :to="{name:'Reg'}" style="color:#fff">注册&nbsp;</router-link>
          <span>/&nbsp;</span>
          <router-link :to="{name:'Login'}" style="color:#fff">登录</router-link>
        </div>
      </div>
      <div class="set">
        <router-link :to="{name:'Setting'}" style="color:#fff" class="set_">设置</router-link>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="orders">
      <div class="mine">
        <span>我的订单</span>
        <router-link :to="{name:order}" style="color:#ccc">查看全部订单&nbsp;></router-link>
      </div>
      <div class="lei">
        <div class="icon">
          <van-icon name="peer-pay" class="iconList"/>
          <router-link :to="{name:待支付}" style="color:#000">待支付</router-link>
        </div>
        <div class="icon">
          <van-icon name="send-gift-o" class="iconList"/>
           <router-link :to="{name:待发货}" style="color:#000">待发货</router-link>
        </div>
        <div class="icon">
          <van-icon name="logistics" class="iconList"/>
          <router-link :to="{name:待收货}" style="color:#000">待收货</router-link>
        </div>
        <div class="icon">
          <van-icon name="after-sale" class="iconList"/>
           <router-link :to="{name:退货}" style="color:#000">退货</router-link>
        </div>
      </div>
    </div>

    <!-- 功能块 -->
    <div class="card">
      <div class="card_list" @click="tip">
        <van-icon name="coupon-o" class="iconList"/>
        <span>优惠券</span>
      </div>
      <div class="card_list">
        <van-icon name="coupon-o" class="iconList"/>
        <router-link :to="{name:'AddressList'}" style="color:#000">收货地址</router-link>
      </div>
      <div class="card_list">
        <van-icon name="edit" class="iconList"/>
        <span>我的评价</span>
      </div>
      <div class="card_list">
        <van-icon name="notes-o" class="iconList"/>
        <span>意见反馈</span>
      </div>
      <div class="card_list">
        <van-icon name="gem-o" class="iconList"/>
        <span>会员中心</span>
      </div>
       <div class="card_list" style="height:0">

      </div>

    </div>




  </div>
</template>

<script>

export default {
  methods:{
    tip(){
      Toast('提示内容');
    }
  }
};
</script>

<style scoped>
.head {
  position: relative;
  width: 100%;
  height: 8rem;
  background: url("../assets/v2_pom6gg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
}
.left_ {
  position: relative;
  width: 49%;
  height: 100%;
  left:1rem
}
.usercenter {
  color: #FFEC8B;
  position: absolute;
  top: 6rem;
  font-size: 3rem;
}
.link {
  position: absolute;
  top: 6.5rem;
  left: 4rem;
  color: #fff;
}
.set {
  width: 49%;
  height: 100%;
  position: relative;
}
.set_{
  position: absolute;
  top:2.5rem;
  right: 1rem;
}

router-link {
  color: #fff;
}
.orders{
  width: 100%;
  height: 10rem;
  background:rgb(250, 246, 246);
  margin:1rem 0;
  border-radius: 5%;
  box-shadow: 0 0 5rem #ccc;

}
.mine{
  width: 100%;
  height: 40%;
  display: flex;
  border-bottom: 1px solid rgb(228, 225, 225);
  justify-content: space-around;
  align-items: center
}
.lei{
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon{
  display: flex;
  flex-direction: column;
  align-items: center
}
.iconList{

  font-size:2rem;
  color:#D19D6E;
}
.card{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


}
.card_list{
  width: 8rem;
  height:8rem;
  margin: 0.5rem 0;
  background:rgb(250, 246, 246);
  border-radius: 5%;
  box-shadow: 0 0 1rem #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}
</style>
