<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-end">
      <router-link to="/index" class="navbar-item">S'inscrire</router-link>
      <router-link to="/connexion" class="navbar-item">Connexion</router-link>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'navBar',
    data (){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
