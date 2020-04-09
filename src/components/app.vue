<template>
  <div id="app">
    <router-view/>
    <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
    }
  },
  
  created() {
  	console.log('app created..')
	console.log($)
  }
}
</script>

<style>
</style>
