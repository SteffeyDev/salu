import Vue from 'vue'
import Vuex from 'vuex'
import { api } from './config.js'
import axios from 'axios'
const CancelToken = axios.CancelToken;

const colorList = ['#ff0000', '#f58231', '#ffe119', '#bcf60c', '#3cbb44b', '#46f0f0', '#4363d8', '#911eb4', '#f032e9', '#000075', '#aaffc3', '#e6beff', '#8b0000', '#ff0033', '#4b0082', '#5c4033', '#ff69b4']

//import contacts_sample_data from '../../scripts/MOCK_DATA.json'
//const sample_data = contacts_sample_data.map((c, i) => Object.assign({_id:i, tags: ['hello']}, c))
//const sample_color_map = Array.from(sample_data
//        .filter(c => c.tags && c.tags.length)
//        .reduce((set, c) => {
//          c.tags.forEach(tag => set.add(tag))
//          return set
//        }, new Set()))
//        .reduce((colorMap, tag) => {
//          let randomIndex = Math.floor(Math.random()*colorList.length)
//          colorMap[tag] = colorList.splice(randomIndex, 1)[0]
//          return colorMap
//        }, {})

function alertErrors(str, err) {
  const errorsObj = err.response.data.error.errors
  alert(str + ': ' + Object.values(errorsObj).map(err => err.message).join(', '))
}

function getRandomColor() {
  if (colorList.length > 0) {
    let randomIndex = Math.floor(Math.random() * colorList.length)
    return colorList.splice(randomIndex, 1)[0]
  } else {
    return '#d3d3d3'
  }
}

export default () => new Vuex.Store({
  state: {
    contacts: [],
    searchText: null,
    searchContacts: [], 
    editContactId: null,
    authenticated: false,
    user: null,
    searchCancelToken: null,
    colorMap: {} 
  },
  getters: {
    allTags(state) {
      return Array.from(state.contacts
        .filter(c => c.tags && c.tags.length)
        .reduce((set, c) => {
          c.tags.forEach(tag => set.add(tag))
          return set
        }, new Set()))
    }
  },
  mutations: {
    setContacts: (state, contacts) => {
      state.contacts = contacts
      state.colorMap = this.getters.allTags.reduce((colorMap, tag) => {
          colorMap[tag] = getRandomColor()
          return colorMap
        }, {})
    },
    addTagToColorMap: (state, tag) => { state.colorMap[tag] = getRandomColor() },
    addContact: (state, contact) => state.contacts.push(contact),
    updateContact: (state, contact) => {
      const index = state.contacts.findIndex(c => c._id === contact._id)
      Vue.set(state.contacts, index, contact)
    },
    deleteContact: (state, id) => {
      state.contacts.splice(state.contacts.findIndex(c => c._id === id), 1)
      state.searchContacts.splice(state.contacts.findIndex(c => c._id === id), 1)
    },
    search: (state, text) => {
      if (text && text.length) {
        state.searchText = text
        if (state.searchCancelToken)
          state.searchCancelToken.cancel("Search canceled")
        state.searchCancelToken = CancelToken.source()
        axios.get(api + '/contacts?search=' + encodeURIComponent(text), {
          cancelToken: state.searchCancelToken.token
        }).then(({ data }) => { state.searchContacts = data })
      } else {
        state.searchContacts = []
      }
    },
    logout: (state) => { state.authenticated = false },
    login: (state, user) => {
      state.authenticated = true
      state.user = (({ username, email }) => ({ username, email }))(user) // Only store the username and email
    },
    editContact: (state, id) => { state.editContactId = id },
    newContact: (state) => { state.editContactId = 'new' },
    endEditing: (state) => { state.editContactId = null }
  },
  actions: {
    fetchContacts({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get(api + "/contacts")
        .then(({ data }) => {
          commit("setContacts", data)
          resolve()
        })
        .catch((error => {
          reject(error)
        }));
      });
    },
    updateContact({ commit, state }, contact) {
      if (contact._id)
        axios.put(api + "/contacts/" + contact._id, contact).then(() => {
          commit('updateContact', contact)
          commit('endEditing')
          commit('search', state.searchText)
        }).catch(err => {
          alertErrors('Error saving contact', err)
        })
      else
        axios.post(api + "/contacts", contact).then(({ data }) => {
          commit('addContact', data)
          commit('endEditing')
          commit('search', state.searchText)
        }).catch(err => {
          alertErrors('Error saving contact', err)
        })
    },
    deleteContact({ commit }, id) {
      axios.delete(api + "/contacts/" + id).then(() => {
        commit('deleteContact', id)
      }).catch(err => {
        alertErrors('Error deleting contact', err)
      })
    }
  }
})
