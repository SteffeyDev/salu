<template>
  <div id="home">
    <b-navbar type="light" class="bg-gradient-light">
      <a class="navbar-brand text-white d-flex" href="#"><img class="mr-1" alt="Vue logo" src="../assets/saluLogo.png" width="30px" height="30px"> <h4 class="m-0">Salu.pro</h4></a>
      <div class="d-flex flex-row align-items-center">
      <span v-if="user" class="mr-4 d-none d-sm-block text-white"><i class="fas fa-user"></i> {{ user.username }}</span>
      <b-button @click="logOut" variant="info" size="sm">Log out</b-button>
      </div>
    </b-navbar>
    <div class="px-2">
      <div class="d-flex flex-row">
        <button @click="newContact">
          <span class="fa-layers fa-fw fa-3x">
            <i class="fas fa-circle text-primary"></i>
            <i class="fa-inverse fas fa-plus" data-fa-transform="shrink-6"></i>
          </span>
        </button>
        <div class="search flex-fill my-4 px-3">
          <span class="fas fa-search fa-2x"></span>
          <b-form-input size="lg" type="search" placeholder="Search your contacts" :value="searchText" @input="search" />
        </div>
      </div>
      <div v-if="layout === 'compact'">
        <b-tabs pills fill v-model="tabIndex">
          <b-tab active title="Contact List">
            <ContactList class="mt-3" />
          </b-tab>
          <b-tab title="Search Results">
            <div class="d-flex justify-content-center align-items-center" v-if="noContacts">
              <h2 class="my-4">
                <button @click="selectTag(tag)" v-for="tag in tags" :key="tag">
                  <Tag :tag="tag" />
                </button>
              </h2>
            </div>
            <ContactCardCollection v-else />
          </b-tab>
        </b-tabs>
      </div>
      <div v-else class="container-fluid">
        <div class="row">
          <div class="col-4">
            <ContactList />
          </div>
          <div class="col-8">
            <div class="d-flex justify-content-center align-items-center" v-if="noContacts">
              <h2 class="my-4">
                <button @click="selectTag(tag)" v-for="tag in tags" :key="tag">
                  <Tag :tag="tag" />
                </button>
              </h2>
            </div>
            <ContactCardCollection v-else />
          </div>
        </div>
      </div>
    </div>
    <ContactEditModal />
  </div>
</template>

<script>
import ContactList from './ContactList.vue'
import ContactCardCollection from './ContactCardCollection.vue'
import ContactEditModal from './ContactEditModal.vue'
import Tag from './Tag.vue'
import { mapState } from 'vuex'
import axios from 'axios'
import { api } from '../config.js'

export default {
  name: 'home',
  data: () => ({
    windowWidth: window.innerWidth,
    tabIndex: 0
  }),
  computed: mapState({
    searchText: 'searchText',
    user: 'user',
    layout() {
      if (this.windowWidth < 600)
        return 'compact'
      return 'wide'
    },
    tags(state) {
      return Array.from(state.contacts.reduce((allTags, contact) => {
        contact.tags.forEach(tag => allTags.add(tag))
        return allTags
      }, new Set()))
    },
    noContacts() {
      return this.$store.getters.searchContacts.length === 0
    }
  }),
  watch: {
    searchText() {
      this.tabIndex = 1
    }
  },
  methods: {
    logOut() {
      // call logout endpoint, which should remove JWT cookie
      axios.post(api + '/auth/logout').then(() => this.$store.commit('logout'))
    },
    search(value) {
      this.listSlideIn = false
      this.$store.commit('search', value)
    },
    selectTag(tag) {
      this.$store.commit('search', tag)
    },
    newContact() {
      this.$store.commit('newContact')
    }
  },
  mounted() {
    this.$nextTick(() => window.addEventListener('resize', () => { this.windowWidth = window.innerWidth }))
    this.$store.dispatch('fetchContacts')  
  },
  components: {
    ContactList,
    ContactCardCollection,
    Tag,
    ContactEditModal
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
  left: 25px;
}

#home {
}

button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
</style>
