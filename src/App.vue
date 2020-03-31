<template>
  <div>
<!--   <router-view/> -->

    <router-view/>
    <router-view name="footer"/>
    <!-- <router-view name="index">
      <router-view name="body"></router-view>
      <router-view name="footer"></router-view>
    </router-view> -->


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
