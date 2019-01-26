<template>
  <div id="home">
    <b-navbar type="light">
      <a class="navbar-brand" href="#"><img alt="Vue logo" src="../assets/Salu-Pro-Logo.gif" width="30px"> Salu.pro</a>
      <b-button @click="logOut" variant="secondary" size="sm">Log out</b-button>
    </b-navbar>
    <div class="px-2">
      <div class="search w-100 my-4 px-3">
        <span class="fas fa-search fa-2x"></span>
        <b-form-input size="lg" type="search" placeholder="Search your contacts" :value="searchText" @input="search" />
      </div>
      <div v-if="layout === 'compact'">
        <div v-if="listSlideIn" class="contact-list in">
          <ContactList />
        </div>
        <button v-else @click="listSlideIn = true">
          <div class="contact-list out d-flex flex-column align-items-center pt-2">
            <i class="fas fa-caret-square-right"></i>
          </div>
        </button>
        <div class="ml-5">
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

export default {
  name: 'home',
  data: () => ({
    windowWidth: window.innerWidth,
    listSlideIn: true
  }),
  computed: mapState({
    searchText: 'searchText',
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
  methods: {
    logOut() {
      // call logout endpoint, which should remove JWT cookie
      axios.get('https://salu.pro/auth/logout').then(() => this.$store.commit('logout'))
    },
    search(value) {
      this.listSlideIn = false
      this.$store.commit('search', value)
    },
    selectTag(tag) {
      this.$store.commit('search', tag)
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

.contact-list {
  position: absolute;
  background-color: white;
  top: 150px;
  bottom: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 20px 5px;
}
.contact-list.in {
  width: 90%;
}
.contact-list.out {
  width: 45px;
}
</style>
