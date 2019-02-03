import Vue from 'vue'
import Vuex from 'vuex'
import { api } from './config.js'
import axios from 'axios'
const CancelToken = axios.CancelToken;

const sourceColorList = ['#ff0000', '#f58231', '#ffe119', '#bcf60c', '#3cb44b', '#46f0f0', '#4363d8', '#911eb4', '#f032e9', '#000075', '#aaffc3', '#e6beff', '#8b0000', '#ff0033', '#4b0082', '#5c4033', '#ff69b4']
let workingColorList = JSON.parse(JSON.stringify(sourceColorList))

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
  if (workingColorList.length === 0)
    workingColorList = JSON.parse(JSON.stringify(sourceColorList))
  let randomIndex = Math.floor(Math.random() * workingColorList.length)
  return workingColorList.splice(randomIndex, 1)[0]
}

function tagsFromArray(arr) {
  return Array.from(arr
    .filter(c => c.tags && c.tags.length)
    .reduce((set, c) => {
      c.tags && c.tags.forEach(tag => set.add(tag))
      return set
    }, new Set()))
}

const initialState = {
  contacts: [],
  searchText: null,
  searchContacts: [], 
  editContactId: null,
  authenticated: false,
  user: null,
  searchCancelToken: null,
  colorMap: {},
  loadingSearch: false
}

export default () => new Vuex.Store({
  state: Vue.util.extend({}, initialState),
  getters: {
    allTags(state) {
      return tagsFromArray(state.contacts)
    }
  },
  mutations: {
    setContacts: (state, contacts) => {
      state.contacts = contacts
      state.colorMap = tagsFromArray(contacts).reduce((colorMap, tag) => {
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
        state.loadingSearch = true
        axios.get(api + '/contacts?search=' + encodeURIComponent(text), {
          cancelToken: state.searchCancelToken.token
        }).then(({ data }) => {
          state.searchContacts = data
          state.loadingSearch = false
        })
      } else {
        state.searchContacts = []
      }
    },
    logout: (state) => {
      for (let f in state) {
        Vue.set(state, f, initialState[f])
      }
      workingColorList = JSON.parse(JSON.stringify(sourceColorList))
    },
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
