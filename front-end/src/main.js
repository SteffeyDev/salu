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
      labels: ['UCF', 'CCO', 'Hack@UCF']
    }, {
      _id: '54345',
      name: 'Michael Ibeh',
      labels: ['UCF', 'Hack@UCF']
    }
    ],
    searchText: null,
    authenticated: false
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
