import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Classify from './views/classify.vue'
import ShopCart from './views/shopCart.vue'
import UserCenter from './views/userCenter.vue'
import Address from './views/Address.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import AddressList from './views/AddressList.vue'
import reAddress from './views/reAddress.vue'
import About from './views/About.vue'
import Setting from './views/Setting.vue'
import OrderWrite from './views/OrderWrite.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
      },{
        path: '/classify',
        name: 'Classify',
        component: Classify
      },{
        path:'/classify/:id',
        name:'Detail',
        component:Detail,
      },{
        path: '/shopCart',
        name: 'ShopCart',
        component: ShopCart
      },{
        path: '/userCenter',
        name: 'UserCenter',
        component: UserCenter
      },{
        path: '/Address',
        name: 'Address',
        component: Address
      },{
        path: '/addressList',
        name: 'AddressList',
        component: AddressList
      },{
        path: '/reAddress/:id',
        name: 'reAddress',
        component: reAddress
      }, {
        path:'/login',
        name:'Login',
        component:Login,
      }, {
        path:'/reg',
        name:'Reg',
        component:Reg,
      }, {
        path:'/about',
        name:'About',
        component:About,
      }, {
        path:'/setting',
        name:'Setting',
        component:Setting,
      },{
        path: '/OrderWrite',
        name: 'OrderWrite',
        component: OrderWrite
      }
    ]
  })


export default router;