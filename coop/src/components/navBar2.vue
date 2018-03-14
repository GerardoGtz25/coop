<template>
  <nav class="navbar is-fixed-top">
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
      <router-link to="/" class="navbar-item">Conversations</router-link>
      <router-link to="/" class="navbar-item">Members</router-link>
      <a @click="deconnecter" class="navbar-item">Déconexion</a>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'navBar2',
    data (){
      return{
      }
    },
    methods: {
      deconnecter(){
        window.axios.delete('members/signout');
        this.$store.commit('setMember', false);
        this.$store.commit('setToken', false);
        this.$router.push({path: '/connexion'});
      }
    }
  }
</script>

<style scoped>

</style>
