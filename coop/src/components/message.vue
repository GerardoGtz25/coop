<template>
  <div class="fondo_completo">
    <div class="contenedor">
      <table class="table is-fullwidth">
        <tr>
          <td><h1>{{topic}}</h1></td>
        </tr>
        <tbody>
          <tr v-for="message in messages.posts" :key="message._id">
            <td>{{message.message}}</td>
          </tr>
        </tbody>
      </table>
      <input v-on:keyup.enter="submit" v-model="msg" class="input is-primary is-rounded" type="text" placeholder="Text input">
    </div>
  </div>
</template>
<script>
export default {
  name: 'message',
  data () {
    return {
      messages: '',
      msg: '',
      topic: ''
    }
  },

  created() {
    window.bus.$emit('log')
    this.getMessage()
  },
  methods:{
    getMessage(){
      window.axios.get('channels/' + this.$route.params.id,{
        params :{
					token: this.$store.state.token
				}
      }).then((response) => {
        this.messages = response.data
        this.topic = response.data.topic
      }).catch((error) => {
        //alert(error);
      });
    },
    submit(){
      window.axios.post('channels/'+ this.$route.params.id+'/posts', {
        message : this.msg,
				params:{
          token: this.$store.state.token
        }
      }).then((response) => {
        this.msg = '';
        this.getMessage()
      }).catch((error) => {
        alert(error.response);
      });
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
.input{
  position:fixed;
  bottom:0;
  width: 100%;
}
.table{
  margin-top: 50px;
}
</style>
