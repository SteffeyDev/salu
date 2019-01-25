<template>
  <b-modal v-if="contact" v-model="showModal" ok-title="Save"
           hide-header-close :title="name" @ok="saveContact" @hidden="afterHidden">
    <!--Name-->
    <div class="form-row">
      <div class="form-group col">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" v-model="contact.first">
      </div>
      <div class="form-group col">
        <label for="inputName" class="invisible">Name</label> <!--Invisible label for alignment purposes-->
        <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" v-model="contact.last">
      </div>
    </div>
    <!--Email-->
    <div class="form-group">
      <label for="inputEmail">Email</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com" v-model="contact.email">
    </div>
    <!--Phone-->
    <div class="form-group">
      <label for="inputPhone">Phone</label>
      <input type="tel" class="form-control" id="inputPhone" v-model="contact.phone">
    </div>
    <!--Address-->
    <div class="form-group">
      <label for="inputAddress">Address</label>
    </div>
    <!--Memo-->
    <div class="form-group">
      <label for="inputMemo">Notes</label>
      <textarea class="form-control" rows="3" id="inputMemo" v-model="contact.notes"></textarea>
    </div>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    showModal: false,
    contact: null
  }),
  methods: {
    saveContact() {
      this.$store.dispatch('updateContact', this.contact)
    },
    afterHidden() {
      this.$store.commit('endEditing')
    }
  },
  computed: mapState({
    contactId: 'editContactId',
    name() {
      return this.contact.first + ' ' + this.contact.last;
    }
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
