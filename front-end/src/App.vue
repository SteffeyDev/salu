<template>
  <div id="app">
    <!--FontAwesome stylesheet reference-->
    <Home v-if="authenticated" />
    <Login v-else />
  </div>
</template>

<script>  
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import { mapState } from 'vuex'
import axios from 'axios'
import { api } from './config.js'

export default {
  name: 'app',
  data: () => ({
  }),
  computed: mapState({
    authenticated: state => state.authenticated
  }),
  mounted() {
    axios.get(api + '/auth/autologin', { withCredentials: true }).then(({ data }) => this.$store.commit('login', data)).then(() => this.$store.dispatch('fetchContacts'))
  },
  components: {
    Login,
    Home
  }
}
</script>

<style>
  .vertical-center {
    min-height: 100%; /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */
    display: flex;
    align-items: center;
  }

  .force-full-height{
    min-height: 100%;
    min-height: 100vh;
  }

  .jumbotron-bg {
    width: 100vw;
    min-height: 100%;
    min-height: 100vh;
  }

  .bg-gradient-light {
    background: linear-gradient(to bottom right, #185a9d, #43cea2);
  }
</style>

<style lang="scss">
  $info: #F19D39;
  $primary: #39ADAF;
  @import "~bootstrap/scss/bootstrap.scss";
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

  .btn-info {
    color: white !important;
  }
</style>
