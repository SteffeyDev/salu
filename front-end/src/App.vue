<template>
  <div id="app">
    <!--FontAwesome stylesheet reference-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous">
    <Home v-if="authenticated" />
    <Login v-else />
  </div>
</template>

<script>  
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data: () => ({
  }),
  computed: mapState({
    authenticated: state => state.authenticated
  }),
  components: {
    Login,
    Home
  }
}
</script>

<style>

  .force-full-height{
    height: 100vh;
  }

  .jumbotron-bg{
    width: 100vw;
    height: 100vh;
  }

  .bg-gradient-light {
    background: linear-gradient(to bottom right, #185a9d, #43cea2)
  }

  .vertical-center {
    min-height: 100%; /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */
    display: flex;
    align-items: center;
  }
</style>
