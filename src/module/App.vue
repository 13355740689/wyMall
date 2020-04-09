<template>
    <div>
      <!-- <router-view></router-view> -->
      <!-- <button @click="gogo">登入</button> -->
      <router-view></router-view>
    </div>
</template>

<script>
console.log('base...App.vue')
export default{
  data(){
    return {

    }
  },

  mounted(){
    // this.currentPage = 'index';
    // this.$router.push({ name: 'index' })
  },

  methods:{
    gogo:function(){
      // this.currentPage = 'login';
      // this.$router.push({ name: 'login' })
      window.location.href = '/login.html'
    }
  }
}
</script>
