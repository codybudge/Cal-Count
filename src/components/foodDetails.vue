<template>
<div class="foodDetails">

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
      item(){
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