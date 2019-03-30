<template>
    <div>
      <van-nav-bar
        fixed
        title="填写订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
      <div class="main">

      <!-- 收货地址 -->
      <div class="address-warp">
        <div class="left_">
          <div class="top_">
            <p class="name">
              name
            </p>
            <p class="phone">
              电话号码
            </p>
          </div>
          <div class="bottom_">详细地址省市。。。。</div>
        </div>
        <div class="right_">
          <van-icon name="edit" class="edit"/>
        </div>

      </div>
      <!-- 提交商品 -->
      <van-panel title="送达时间" desc="" status="预计两小时后送达" class="time">
        <div class="proList">
          <p>图片</p>
          <p>图片</p>
          <p>图片</p>
        </div>
      </van-panel>

      <!-- 面板1 -->
      <ul>
        <li>
          <span>发票</span>
          <span>电子（商务个人明细）</span>
        </li>
        <li>
          <span>优惠券</span>
          <span>暂无优惠券可用</span>
        </li>
        <li>
          <span>运费险</span>
          <span>免费送</span>
        </li>
      </ul>
      <!-- 面板2 -->
      <ul style="height:6rem">
        <li>
          <span>商品总额</span>
          <span></span>
        </li>
        <li>
          <span>配送费</span>
          <span>免运费</span>
        </li>
      </ul>
      <!-- 面板3 -->
        <div class="beizhu">
          <span>订单备注：</span>
          <textarea name="" cols="30" style="border:0;  background:rgb(250, 246, 246); " placeholder="（已知和卖家协商确认）"></textarea>
       </div>


       <!--  面板完 -->
      </div>
      <!-- 底部提交 -->
      <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
    />
    </div>
</template>

<script>
export default {
  data(){
    return {
       chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },]
    }
  },
  methods:{
    onClickLeft(){
      this.$router.push({
        name:'ShopCart'
      })
    },
      onAdd() {
      
    },

    onEdit(item, index) {
      
    }
  }
  }

</script>

<style scoped>
  .address-warp{
    display: flex;
    justify-content: space-between;
    margin: 4rem 0 1rem 0;
    width: 100%;
    height: 3rem;
    padding-bottom: 2rem;
    background:rgb(250, 246, 246);
    box-shadow: 0 0 1rem #ccc;
  }
 
  ul{
    margin-top: 2rem;
    width: 100%;
    height: 8rem;
    background:rgb(250, 246, 246);
    box-shadow: 0 0 1rem #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-around
  }
  li{
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
  }
  .beizhu{
    padding-left: 1rem;
    padding-top: 2rem;
    margin-top: 2rem;
    width: 100%;
    height: 4rem;
    background:rgb(250, 246, 246);
    box-shadow: 0 0 1rem #ccc;
    display: flex;
    justify-content: flex-start;
  }
  .left_{
    width: 49%;
    height: 5rem;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
  }
  .right_{
    width: 50%;
    height: 100%;
    text-align: center;
   
  }
  .edit{
    margin: 2rem -9rem 0 0;
  }
  .top_{
    display: flex;
    justify-content: space-between;
  }
  .proList{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .main{
    height: 50rem;
  }
</style>


