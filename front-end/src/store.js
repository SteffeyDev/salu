import Vue from 'vue'
import Vuex from 'vuex'
import { api } from './config.js'
import axios from 'axios'

function alertErrors(str, err) {
  const errorsObj = err.response.data.error.errors
  alert(str + ': ' + Object.values(errorsObj).map(err => err.message).join(', '))
}

export default () => new Vuex.Store({
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
    searchContacts: [],
    editContactId: null,
    authenticated: false,
    user: null
  },
  mutations: {
    setContacts: (state, contacts) => { state.contacts = contacts },
    addContact: (state, contact) => state.contacts.push(contact),
    updateContact: (state, contact) => {
      let index = state.contacts.findIndex(c => c._id === contact._id)
      Vue.set(state.contacts, index, contact)
    },
    deleteContact: (state, id) => {
      state.contacts.splice(state.contacts.findIndex(c => c._id === id), 1)
      state.searchContacts.splice(state.contacts.findIndex(c => c._id === id), 1)
    },
    search: (state, text) => {
      if (text && text.length) {
        state.searchText = text
        axios.get(api + '/contacts?search=' + encodeURIComponent(text)).then(({ data }) => { state.searchContacts = data })
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
    updateContact({ commit }, contact) {
      if (contact._id)
        axios.put(api + "/contacts/" + contact._id, contact).then(() => {
          commit('updateContact', contact)
        }).catch(err => {
          alertErrors('Error saving contact', err)
        })
      else
        axios.post(api + "/contacts", contact).then(({ data }) => {
          commit('addContact', data)
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
