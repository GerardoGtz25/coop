<template>
  <div v-if="this.$store.state.token === false" class="fondo">
    <h1>{{ msg }}</h1>
    <form @submit="connecter">
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
  </div>
</template>

<script>
export default {
  name: 'connexion',
  data () {
    return {
      msg: "Connexion",
      email: '',
      password: ''
    }
  },
  methods: {
    connecter(){
			window.axios.post('members/signin', {
		        email : this.email,
		        password: this.password
		    }).then((response) => {
		        this.$store.commit('setMember', response.data);
		        this.$store.commit('setToken', response.data.token);

		        window.axios.defaults.params.token = response.data.token;

		        this.$router.push({path: '/channels'});
		    }).catch((error) => {
		        alert(error.response.data.error);
		    });
		}

  }
}
</script>

<style scoped>

</style>
