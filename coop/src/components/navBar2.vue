<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <router-link to="/channels" class="navbar-item">
      <img src="../assets/logo.png" width="38" height="38">
    </router-link>
      <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-end">
      <router-link to="/channels" class="navbar-item">Conversations</router-link>
      <router-link to="/membres" class="navbar-item">Members</router-link>
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
        window.axios.delete('members/signout', {
          params : {
            token : this.$store.state.token
          }
        }).then((response) => {
          this.$store.commit('setMember', false);
          this.$store.commit('setToken', false);
          this.$router.push('/connexion');
          delete this.$store.state.member;
        }).catch ((error) => {
           //alert(error)
        })
      }
    }
  }
</script>

<style scoped>
.navbar{
  position: fixed;
  width: 100%;
  z-index: 100;
}
</style>
