<template class="Home">
  <div style="padding-bottom:3.32rem">
    <van-search
      placeholder="请输入搜索关键词"
      show-action
      shape="round">
      <div slot="action" icon="
location-o" style="height:1.5rem;width:1.5rem"><van-icon name="location-o" style="font-size:1.3rem"/></div>
    </van-search>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in images" :key="index">
        <img class="swipe-img" :src="img"/>
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" justify="space-between" class="class_wrap">
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t1.jpg"></h5>
        <p>新鲜水果</p>
      </van-col>
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t2.jpg"></h5>
        <p>蔬菜净菜</p>
      </van-col>
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t3.jpg"></h5>
        <p>海鲜水产</p>
      </van-col>
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t4.png"></h5>
        <p>速冻牛肉</p>
      </van-col>
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t4.jpg"></h5>
        <p>越南火龙果</p>
      </van-col>
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t5.jpg"></h5>
        <p>进口山竹</p>
      </van-col>
       <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t6.jpg"></h5>
        <p>巴沙鱼柳</p>
      </van-col>
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t7.jpg"></h5>
        <p>A级鲜蛋</p>
      </van-col>
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t8.jpg"></h5>
        <p>越南火龙果</p>
      </van-col>
      <van-col span="6" type="flex" class="className">
        <h5><img @click='tofreshHandle' src="../assets/img/t9.jpg"></h5>
        <p>麒麟西瓜</p>
      </van-col>
    </van-row>

    <!-- 人气热卖 -->
    <div style="height:13rem">
    <div class="quickBuy1">
      <h3>
        <p>人气热销</p>
      </h3>
      <van-swipe :autoplay="6000" indicator-color="white" class="hotSell_banner1">
        <van-swipe-item>
          <van-row type="flex" justify="space-between" class="hotItem_b">
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="../assets/img/hot01.jpg"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li class="title">冷冻榴莲肉</li>
                <li>
                  <i>￥41.80</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="../assets/img/hot02.jpg"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>进口金奇异果 </li>
                <li>
                  <i>￥47.80</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="../assets/img/hot03.jpg"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>鲜食糯玉米</li>
                <li>
                  <i>￥19.80</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://imgservice2.suning.cn/uimg1/b2c/image/v4Pn6NYliuGiaSF3i4mMIA.jpg_400w_400h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>小龙坎随手杯</li>
                <li>
                  <i>￥14.90</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
          </van-row>
        </van-swipe-item>
        <van-swipe-item>
          <van-row type="flex" justify="space-between" class="hotItem_b">
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://imgservice2.suning.cn/uimg1/b2c/image/X4RNhbhyS60J8E5s9aLdAw.jpg_200w_200h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>阿根廷红虾</li>
                <li>
                  <i>￥108.00</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://imgservice1.suning.cn/uimg1/b2c/image/baVIAp4xQj3B1obRzR2t-w.jpg_200w_200h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>越南火龙果</li>
                <li>
                  <i>￥12.80</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://imgservice2.suning.cn/uimg1/b2c/image/laY6O9uFUDRyk9pJxJ3XDw.jpg_200w_200h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>乳脂挞液</li>
                <li>
                  <i>￥19.90</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://image1.suning.cn/uimg/b2c/newcatentries/0070183716-000000010128147992_1.jpg_400w_400h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>八宝饭</li>
                <li>
                  <i>￥24.90</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
          </van-row>
        </van-swipe-item>
      </van-swipe>
    </div>
    </div>




    <div class="quickBuy">
      <van-swipe :autoplay="7000" indicator-color="white" class="hotBanner">
        <van-swipe-item v-for="(img, index) in images" :key="index">
          <img class="swipe-img" :src="img"/>
        </van-swipe-item>
      </van-swipe>
      <van-swipe :autoplay="6000" indicator-color="white" class="hotSell_banner">
        <van-swipe-item>
          <van-row type="flex" justify="space-between" class="hotItem_b">
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://imgservice2.suning.cn/uimg1/b2c/image/X4RNhbhyS60J8E5s9aLdAw.jpg_200w_200h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>阿根廷红虾</li>
                <li>
                  <i>￥108.00</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://imgservice1.suning.cn/uimg1/b2c/image/baVIAp4xQj3B1obRzR2t-w.jpg_200w_200h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>越南火龙果</li>
                <li>
                  <i>￥12.80</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://imgservice2.suning.cn/uimg1/b2c/image/laY6O9uFUDRyk9pJxJ3XDw.jpg_200w_200h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>乳脂挞液</li>
                <li>
                  <i>￥19.90</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://image1.suning.cn/uimg/b2c/newcatentries/0070183716-000000010128147992_1.jpg_400w_400h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>八宝饭</li>
                <li>
                  <i>￥24.90</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
          </van-row>
        </van-swipe-item>
            <van-swipe-item>
          <van-row type="flex" justify="space-between" class="hotItem_b">
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="../assets/img/hot01.jpg"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li class="title">冷冻榴莲肉</li>
                <li>
                  <i>￥41.80</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="../assets/img/hot02.jpg"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>进口金奇异果 </li>
                <li>
                  <i>￥47.80</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="../assets/img/hot03.jpg"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>鲜食糯玉米</li>
                <li>
                  <i>￥19.80</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
            <van-col span="6" type="flex" class="hotItem_c">
              <h5><img src="https://imgservice2.suning.cn/uimg1/b2c/image/v4Pn6NYliuGiaSF3i4mMIA.jpg_400w_400h_4e"></h5>
              <ul>
                <li><span>特卖</span></li>
                <li>小龙坎随手杯</li>
                <li>
                  <i>￥14.90</i>
                  <em>
                    <van-icon name="shopping-cart-o" style="font-size:1rem"/>
                  </em>
                </li>
              </ul>
            </van-col>
          </van-row>
        </van-swipe-item>
      </van-swipe>
    </div>
    <p style="text-align:center">没有更多了</p>
  </div>
</template>

<script>
// @ is an alias to /src

/*暂时替代文件*/
 import { images } from '../data/db'

export default {
  name: 'Home',
  data() {
    return {
      images
    }
  },
  methods:{
    tofreshHandle(){
      this.$router.push({
        name:'Classify'
      })
    }
  },
  components: {
  }
}
</script>
<style scoped>
@import url('../assets/css/home.css');
</style>
<style scoped>
  .hotItem_b h5 img{
    width:45px;
    height:84px;
  }
</style>

