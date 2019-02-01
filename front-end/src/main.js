import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import createStore from './store.js'

Vue.use(BootstrapVue);
Vue.use(Vuex);
const store = createStore();

Vue.config.productionTip = false

Vue.directive('bind-to-height', {
  inserted: function(el) {
    el.style['max-height'] = window.innerHeight - (el.offsetTop || el.offsetParent.offsetTop) + 'px'
    el.style['overflow-y'] = 'auto'
    window.addEventListener('resize', () => { el.style['max-height'] = window.innerHeight - (el.offsetTop || el.offsetParent.offsetTop) + 'px' })
  }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
