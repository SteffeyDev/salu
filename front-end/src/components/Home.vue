<template>
  <div id="home">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#"><img alt="Vue logo" src="../assets/Salu-Pro-Logo.gif" width="30px"> Salu.pro</a>
      <button @click="logOut" class="btn btn-secondary btn-sm">Log out</button>
    </nav>
    <div class="flex flex-column">
      <input class="form-control form-control-lg my-4 mx-3" type="search" placeholder="Search your contacts" />
      <div id="list-container">
        <ContactList v-bind:contacts="contacts" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactList from './ContactCard.vue'

export default {
  name: 'home',
  data: () => ({
  }),
  methods: {
    logOut: function () {
      alert("Log out button pressed");
    }
  },
  components: {
    ContactList
  }
}
</script>

<style>
#home {
}
</style>
