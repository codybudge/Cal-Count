import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

var api = axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  timeout: 3000,
  headers: {
    'x-app-key': "13b18680a00ea1298a746b6fad710315",
    "x-app-id": "aea6bb53"
  }
})

vue.use(vuex)

export default new vuex.Store({
  state: {
    foodList: [],
    curent:[]
  },
  mutations: {
    addItemToCart(state, item) {
      state.cart.push(item)
    }
  },
  actions: {
    addItemToCart({ commit, dispatch }, item) {
      commit('addItemToCart', item)
      router.push({ name: 'cart' })
    }
  },
  getFoodList({ commit, dispatch }, items) {
    api.post("", { query: items })
      .then(res => {
        console.log(res.data.foods)
      })
  }
})


