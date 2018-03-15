<template>
  <div class="fondo_completo">
    <div class="contenedor">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th colspan="3">Membres</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="membre in membres" :key="membre._id">
            <td>{{membre.fullname}}</td>
            <td>{{membre.email}}</td>
            <td><a class="button is-warning" @click ="deleteMembre(membre._id, membre.email)">Supprimer</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'membres',
  data () {
    return {
			membres : []
    }
  },
  created() {
    window.bus.$emit('log')
    this.getMembres()
  },
  methods:{
    getMembres(){
      window.axios.get('members/', {
				params :{
					token: this.$store.state.token
				}
			}).then((response) => {
				this.membres = response.data
			}).catch ((error) => {
				 alert(error);
			})
    },
    deleteMembre(id, email) {
      if (email == this.$store.state.member.email) {
        // window.axios.delete('members/'+id,{
        //   params : {
        //     token : this.$store.state.token
        //   }
        // }).then((response) => {
        //   this.getMembres()
        // }).catch ((error) => {
  			// 	 alert(error.data);
  			// })
        alert('Error bizarre je ne sais pas comme le corriger')
      }else {
        alert('vous ne pouvez effacer que votre profil');
      }
    }
  }
}
</script>

<style scoped>
.contenedor{
  margin-top: 30px;
  padding: 10px;
}
.fondo_completo{
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  width: 100%;
  height: 100vh;
}
.table{
  margin-top: 50px;
}
</style>
