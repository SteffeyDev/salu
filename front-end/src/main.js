import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import createStore from './store.js'

Vue.use(BootstrapVue);
Vue.use(Vuex);
const store = createStore();

Vue.config.productionTip = false

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}

Vue.directive('bind-to-height', {
  inserted: function(el) {
    el.style['max-height'] = window.innerHeight - getPosition(el).y + 'px'
    el.style['overflow-y'] = 'auto'
    window.addEventListener('resize', () => { el.style['max-height'] = window.innerHeight - getPosition(el).y + 'px' })
  }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
