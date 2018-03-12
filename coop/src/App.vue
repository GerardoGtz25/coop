<template>
  <div id="app">
    <navBar></navBar>
    <router-view/>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'

export default {
  name: 'App',
  components:{
    navBar
  	},
	data () {
	    return {
	    }
	}
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
}
body{
  background-image: url(assets/fondo.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
