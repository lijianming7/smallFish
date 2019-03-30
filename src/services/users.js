import axios from '../utils/request'

export function login(userName, password) {
  return axios.post('/api/v1/auth/login', {
    userName,
    password
  })
}

export function reg(user) {
  return axios.post('/api/v1/auth/reg', user)
}


export function addToshopCart(product,quantity) {
  return axios.post('/api/v1/shop_carts', {
    product,
    quantity
  }, {
    headers: {
      authorization: 'bearer ' + sessionStorage.getItem('Admin-Token')
    }
  })
}

  /*
  从购物车中删除
  */


  export function delFromProduct(product){
    let myCarts = getShopCart()
    const index = myCarts.findIndex(cart =>cart.product._id == product._id)
    if(index > -1){
      myCarts.splice(index,1)
    }
    localStorage.setItem('my-shopcart',JSON.stringify(myCarts));//保存购物车信息
  }

  export function getShopCart(){
    return axios.get('/api/v1/shop_carts', {
      headers: {
        authorization: 'bearer ' + sessionStorage.getItem('token')
      }
    })
  }

  /*
  获取购物车商品数量
  */

  export function getShopCartCount(){
    const myCarts = getShopCart()
    let result = 0
    myCarts.forEach(item => result +=item.quantity)
    return result
  }