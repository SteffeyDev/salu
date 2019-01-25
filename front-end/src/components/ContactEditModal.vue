<template>
  <b-modal v-if="contact" v-model="showModal" ok-title="Save"
           hide-header-close :title="contact.name" @ok="saveContact" @hidden="afterHidden">
    <!--Name-->
    <div class="form-row">
      <div class="form-group col">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" :value="contact.name">
      </div>
      <div class="form-group col">
        <label for="inputName" class="invisible">Name</label> <!--Invisible label for alignment purposes-->
        <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" :value="contact.name">
      </div>
    </div>
    <!--Email-->
    <div class="form-group">
      <label for="inputEmail">Email</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com" :value="contact.email">
    </div>
    <!--Phone-->
    <div class="form-group">
      <label for="inputPhone">Phone</label>
      <input type="tel" class="form-control" id="inputPhone" :value="contact.phone">
    </div>
    <!--Memo-->
    <div class="form-group">
      <label for="inputMemo">Memo:</label>
      <textarea class="form-control" rows="3" id="inputMemo"></textarea>
    </div>
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