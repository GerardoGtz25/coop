<template>
  <div class="fondo_completo">
    <div class="contenedor">
      <div v-if="showModal" class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <form class="form" @submit="creerConversation">
             <h1>Créer une conversation</h1>
             <hr>
            <div class="field">
              <div class="control">
                <input v-model="label" class="input" type="text" placeholder="Titre">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="topic" class="input" type="text" placeholder="Description">
              </div>
            </div>
            <input class="button is-primary" type="submit" value="Créer">
            <button class="button is-primary" @click="showModal = false">Annuler</button>
          </form>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="showModal = false"></button>
      </div>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Conversations</th>
            <th><button class="button is-primary" @click="showModal = true">Nouvelle conversation</button></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="conversation in conversations" :key="conversation._id">
            <td>{{conversation.label}}</td>
            <td>{{conversation.topic}}</td></i>
            <td><router-link :to="{ name : 'conversation', params : {id:conversation._id}}" class="button is-success"><i class="fas fa-eye"></i></router-link></td>
            <td><a class="button is-warning" @click="deleteChannel(conversation._id)"><i class="far fa-trash-alt"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<script>
export default {
  name: 'channels',
  data () {
    return {
      showModal: false,
			label: '',
      topic: '',
      conversations: []
    }
  },
  created() {
    window.bus.$emit('log')
    this.getConversations()
  },
  methods:{
    creerConversation(){
      window.axios.post('channels',{
				label : this.label,
				topic : this.topic,
				params : {
					token : this.$store.state.token
				}
			}).then((response) => {
        this.showModal = false;
        this.label = '';
        this.topic = '';
        this.getConversations();
      }).catch((error) => {
        //alert(error.response);
      });
    },
    getConversations(){
      window.axios.get('channels/', {
				params :{
					token: this.$store.state.token
				}
			}).then((response) => {
				this.conversations = response.data
			}).catch ((error) => {
				 //alert(error);
			})
    },
    deleteChannel(id) {
      window.axios.delete('channels/'+id, {
        params :{
          token: this.$store.state.token
        }
      }).then((response) => {
        this.getConversations();
      })
    }
  },
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
.form{
  background-color: beige;
  border-radius: 5px;
  padding: 15px;
}
.table{
  margin-top: 50px;
}
</style>
