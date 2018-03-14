<template>
  <div v-if="this.$store.state.token === false" class="fondo">
    <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <form @submit="creerMembre">
      <div class="field">
        <p class="control has-icons-right">
          <input v-model="fullname" class="input" type="text" placeholder="Nom">
          <span class="icon is-small is-right">
            <i class="fas fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-right">
          <input v-model="email" class="input" type="email" placeholder="E-mail">
          <span class="icon is-small is-right">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-right">
          <input v-model="password" class="input" type="password" placeholder="Mot de passe">
          <span class="icon is-small is-right">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <input class="button is-primary" type="submit" value="Creer compte">
    </form>
    {{status}}
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: "S'inscrire",
      status: '',
      fullname: '',
      email: '',
      password: '',
    }
  },
  mounted () {
    window.axios.get('ping').then((response) => {
      this.status = response.data.message
    }).catch((error) => {
      alert(error.response.data.error);
    });
  },
  methods:{
    creerMembre(){
      window.axios.post('members', {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      }).then((response) => {
        this.$router.push({path: '/connexion'});
      }).catch((error) => {
        alert(error.response);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
