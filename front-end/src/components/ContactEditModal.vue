<template>
  <b-modal v-if="contact" v-model="showModal" ok-title="Save" hide-header-close :title="contact.name" @ok="saveContact" @hidden="afterHidden">
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data: () => ({
    showModal: false,
    contact: null
  }),
  methods: {
    saveContact() {
      axios.post('http://httpstat.us/200', this.contact).then(() => { this.showModal = false })
    },
    afterHidden() {
      this.$store.commit('endEditing')
    }
  },
  computed: mapState({
    contactId: 'editContactId'
  }),
  watch: {
    contactId(id) {
      if (id) {
        this.contact = Object.assign({}, this.$store.state.contacts.filter(c => c._id === id)[0])
        this.showModal = true
      }
    }
  }
}
</script>

<style>

</style>
