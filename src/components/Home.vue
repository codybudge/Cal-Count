<template>
  <div class="home">

  </div>
</template>

<script>
  export default {
    name: 'Name',
    data() {
      return {
        foodId(){
          this.$store
        }
      }
    },
    computed: {
      foodList(){
        return this.$store.state.foodList
      }
    },
    methods: {
      foods(){
        this.$store.dispatch('getFoodList', this.query)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>