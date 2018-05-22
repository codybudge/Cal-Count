<template>
  <div class="home">
      <h1>Welcome to the Coffee Shop</h1>
      <h4>Food Eaten</h4>
      <ol>
        <li v-for="(food, index) in foodList">
          <router-link :to="{ name: 'foodDetails', params: { id: index }}">{{food.name}}</router-link>
        </li>
      </ol>
      <input type="text" v-model="query">
      <button @click="foods">Serch Food</button>
      <ul>
        <li v-for="(food, index) in setSerchRes">
          <router-link :to="{ name: 'foodDetails', params: { id: index }}">
          <img :src="food.photo.thumb">
         <p>{{food.food_name}}</p>
         <p>{{food.nf_calories}}</p>
        </router-link>
         

        </li>

      </ul>
  </div>
</template>

<script>
  export default {
    name: 'Name',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      foodList(){
        return this.$store.state.foodList
      },
      setSerchRes(){
        return this.$store.state.searchedFood
      }
    },
    methods: {
      foods(){
        this.$store.dispatch('getFoodList', this.query)
      },
      // currentFoods(){
      //   this.$store.dispatch('')
      // }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>