<template>
<div class="foodDetails">
  <ul>
    <h1>DETAILS</h1>
    <li>
        <img :src="foodItem.photo.thumb">
    <p>{{foodItem.food_name}}</p>
    <p>{{foodItem.nf_calories}}</p>
    <button @click="addToCart">Add to Cart</button>
  </li>
    </ul>

</div>
</template>
<script>
  export default {
    name: 'FoodDetails',
    data(){
      return{
      foodItem: this.$store.state.searchedFood[this.$route.params.id]
    }
  },
    computed: {
      item(){
        return this.$store.state.foodList[this.$route.params.id]
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