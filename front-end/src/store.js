import Vue from 'vue'
import Vuex from 'vuex'
import { api } from './config.js'
import axios from 'axios'

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
    deleteContact: (state, id) => state.contacts.splice(state.contacts.findIndex(c => c._id === id), 1),
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
          alert('Error saving contact: ' + JSON.stringify(err))
        })
      else
        axios.post(api + "/contacts", contact).then(() => {
          commit('addContact', contact)
        }).catch(err => {
          alert('Error saving contact: ' + JSON.stringify(err))
        })
    },
    deleteContact({ commit }, id) {
      axios.delete(api + "/contacts/" + id).then(() => {
        commit('deleteContact', id)
      }).catch(err => {
        alert('Error deleting contact: ' + JSON.stringify(err))
      })
    }
  }
})