import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    contacts: [
    {
      _id: '12345',
      first: 'Peter',
      name: 'Steffey',
      email: 'peter.steffey@knights.ucf.edu',
      phone: '123-456-7890',
      tags: ['UCF', 'CCO', 'Hack@UCF']
    }, {
      _id: '54345',
      first: 'Michael',
      last: 'Ibeh',
      tags: ['Human', 'UCF', 'Hack@UCF']
    }
    ],
    searchText: null,
    authenticated: false,
    editContactId: null,
    authenticated: false
  },
  getters: {
    searchContacts: state => state.contacts.filter(contact => contact.name === state.searchText || contact.tags.indexOf(state.searchText) > -1)
  },
  mutations: {
    addContact: (state, contact) => state.contacts.push(contact),
    search: (state, text) => { state.searchText = text },
    logout: (state) => { state.authenticated = false },
    loginSuccessful: (state) => { state.authenticated = true },
    editContact: (state, id) => { state.editContactId = id },
    endEditing: (state) => { state.editContactId = null }
  }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
