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
    axios.get(api + '/auth/autologin').then(({ data }) => this.$store.commit('login', data))
  },
  components: {
    Login,
    Home
  }
}
</script>

<style lang="scss">
$info: orange;
@import "~bootstrap/scss/bootstrap.scss";
@import '~bootstrap-vue/dist/bootstrap-vue.css';

.btn-info {
  color: white !important;
}
</style>

<style>
.bg-gradient-light {
  background: linear-gradient(to bottom right, #185a9d, #43cea2)
}
</style>
