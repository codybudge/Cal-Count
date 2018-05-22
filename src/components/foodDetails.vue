<template>
<div class="foodDetails">
  <ul>
    <h1>DETAILS</h1>
    <li v-for="item in items">
        <img :src="food.photo.thumb">
    <p>{{food.food_name}}</p>
    <p>{{food.nf_calories}}</p>
    <p>{{food.price}}</p>
  </li>
    </ul>

</div>
</template>
<script>
  export default {
    name: 'FoodDetails',
    data(){
      return{
      foodId: this.$route.params.id
      }
    },
    computed: {
      items(){
        return this.$store.state.foodList[this.foodId]
      }
    },
    methods:{
    addToCart(){
      this.$store.dispatch('addItemToCart', this.item)
    }
  }

  }
  

</script>

<style>

</style>