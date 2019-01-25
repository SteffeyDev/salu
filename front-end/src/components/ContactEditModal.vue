<template>
  <b-modal v-model="showModal" ok-title="Save" hide-header-close :title="contact.name" @ok="saveContact">
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  methods: {
    saveContact() {
      axios.get('http://httpstat.us/200').then(() => { this.showModal = false })
    }
  },
  computed: {
    ...mapState({
      contactId: 'editContactId',
      contact(state) {
        return state.contacts.filter(c => c._id === this.contactId)[0]
      },
    }),
    showModal: {
      get() {
        return !!this.contactId
      },
      set(newVal) {
        if (!newVal)
          this.$store.commit('endEditing')
      }
    }
  }
}
</script>

<style>

</style>
