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
      name: 'Peter Steffey',
      email: 'peter.steffey@knights.ucf.edu',
      phone: '123-456-7890',
      tags: ['UCF', 'CCO', 'Hack@UCF']
    }, {
      _id: '54345',
      name: 'Michael Ibeh',
      tags: ['UCF', 'Hack@UCF']
    }
    ],
    searchText: null,
    authenticated: true
  },
  mutations: {
    addContact: (state, contact) => state.contacts.push(contact),
    search: (state, text) => { state.searchText = text }
  }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
