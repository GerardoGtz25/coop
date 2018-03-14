<template>
  <div class="fondo_completo">
    <div class="contenedor">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Conversations</th>
            <th><button class="button is-primary">Nouvelle conversation</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{{token}}</td>
          </tr>
          <tr v-for="conversation in conversations">
            <td>{{conversation}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<script>
export default {
  name: 'conversation',
  data () {
    return {
      token: this.$store.state.token,
      convsersations: []
    }
  },
  methods:{
    chargeConversation(){
      window.axios.get('channels').then((response) => {
          this.conversations = response.data
        }).catch((error) => {
           alert(error.response.data.error);
        });
    }
  },
  mounted () {
    this.chargeConversation();

    window.bus.$on('chargeConversation', () => {
        this.chargeConversation();
    });

  }
}
</script>

<style scoped>
.contenedor{
  margin-top: 50px;
  padding: 10px;
}
.fondo_completo{
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  width: 100%;
  height: 100vh;
}
</style>
