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
      name: 'Peter Steffey',
      labels: ['UCF', 'CCO', 'Hack@UCF']
    }, {
      name: 'Michael Ibeh',
      labels: ['UCF', 'Hack@UCF']
    }
    ]
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
    }
  }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
