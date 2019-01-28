import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    contacts: [
    {
      _id: '12345',
      first: 'Peter',
      last: 'Steffey',
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
    editContactId: null,
    authenticated: false,
    user: null
  },
  getters: {
    searchContacts: state => state.contacts.filter(contact => state.searchText ? state.searchText.indexOf(contact.first) > -1 || state.searchText.indexOf(contact.last) > -1 || contact.tags.indexOf(state.searchText) > -1 : true)
  },
  mutations: {
    setContacts: (state, contacts) => { state.contacts = contacts },
    addContact: (state, contact) => state.contacts.push(contact),
    updateContact: (state, contact) => {
      let index = state.contacts.findIndex(c => c._id === contact._id)
      Vue.set(state.contacts, index, contact)
    },
    search: (state, text) => { state.searchText = text },
    logout: (state) => { state.authenticated = false },
    login: (state, user) => {
      state.authenticated = true
      state.user = (({ username, email }) => ({ username, email }))(user) // Only store the username and email
    },
    editContact: (state, id) => { state.editContactId = id },
    endEditing: (state) => { state.editContactId = null }
  },
  actions: {
    fetchContacts({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get("https://salu.pro/contacts")
        .then((response) => {
          commit("setContacts", response.body)
          resolve()
        })
        .catch((error => {
          reject(error)
        }));
      });
    },
    updateContact({ commit }, contact) {
      if (contact._id)
        axios.put("https://salu.pro/contacts/" + contact._id, contact).then(() => {
          commit('updateContact', contact)
        }).catch(err => {
          alert('Error saving contact: ' + JSON.stringify(err))
        })
      else
        axios.post("https://salu.pro/contacts", contact).then(() => {
          commit('addContact', contact)
        }).catch(err => {
          alert('Error saving contact: ' + JSON.stringify(err))
        })
    }
  }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
