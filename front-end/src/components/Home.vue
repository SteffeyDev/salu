<template>
  <div id="home">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#"><img alt="Vue logo" src="../assets/Salu-Pro-Logo.gif" width="30px"> Salu.pro</a>
      <button @click="logOut" class="btn btn-secondary btn-sm">Log out</button>
    </nav>
    <div class="px-2">
      <div class="search w-100 my-4">
        <span class="fas fa-search fa-2x"></span>
        <input class="form-control form-control-lg" type="search" placeholder="Search your contacts" :value="searchText" @input="search" />
      </div>
      <div v-if="layout !== 'compact'" id="list-container" style="max-width: 300px; position: absolute;">
        <ContactList />
      </div>
      <div :style="layout === 'compact' ? '' : 'margin-left: 300px'">
        <ContactCardCollection />
      </div>
      <ContactList v-if="layout === 'compact'" />
    </div>
  </div>
</template>

<script>
import ContactList from './ContactList.vue'
import ContactCardCollection from './ContactCardCollection.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data: () => ({
    windowWidth: 0
  }),
  computed: mapState({
    searchText: 'searchText',
    layout() {
      if (this.windowWidth < 600)
        return 'compact'
      return 'wide'
    }
  }),
  methods: {
    logOut: () => {
      alert("Log out button pressed");
    },
    search(e) {
      this.$store.commit('search', e.target.value)
    }
  },
  mounted() {
    this.$nextTick(() => window.addEventListener('resize', () => { this.windowWidth = window.innerWidth }))
  },
  components: {
    ContactList,
    ContactCardCollection
  }
}
</script>

<style>
.search {
  position: relative;
  color: #ccc;
}

.search input { text-indent: 32px;}
.search .fa-search {
  position: absolute;
  top: 8px;
  left: 10px;
}

#home {
}
</style>
