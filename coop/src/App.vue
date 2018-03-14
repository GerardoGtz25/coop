<template>
  <div id="app">
    <navBar v-if="this.$store.state.token === false"></navBar>
    <navBar2 v-else></navBar2>
    <router-view/>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
import navBar2 from '@/components/navBar2.vue'

export default {
  name: 'App',
  components:{
    navBar,
    navBar2
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
  background-attachment: fixed;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-weight: 600;
  font-size: 22px;
}
.fondo{
  background-color: rgba(255,255,255,0.8);
  border-radius: 5px;
  width: 600px;
  padding: 20px;
  display: block;
  margin: auto;
  margin-top: 30px;
}
</style>
