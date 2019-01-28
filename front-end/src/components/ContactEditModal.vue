<template>
  <b-modal v-if="contact" v-model="showModal" ok-title="Save" size="lg" header-bg-variant="primary" header-text-variant="white"
           hide-header-close :title="contact.first + ' ' + contact.last" @ok="saveContact" @hidden="afterHidden">
    <!--Name-->
    <b-form-group>
      <b-form-row>
        <b-col>
          <label for="inlineFormInputFirstName">Name</label>
          <b-form-input class="mr-sm-2" type="text" placeholder="First Name" v-model="contact.first" id="inlineFormInputFirstName" />
        </b-col>
        <b-col>
          <label class="invisible">Name</label> <!--Invisible text for alignment-->
          <b-form-input class="mr-sm-2" id="inlineFormInputLastName" placeholder="Last Name" v-model="contact.last" />
        </b-col>
      </b-form-row>
    </b-form-group>
    <!--Email-->
    <b-form-group>
      <label for="inputEmail">Email</label>
      <b-form-input type="email" id="inputEmail" placeholder="email@example.com" v-model="contact.email" />
    </b-form-group>
    <!--Phone-->
    <b-form-group>
      <label for="inputPhone">Phone</label>
      <b-input type="tel" id="inputPhone" placeholder="(123) 456-789" v-model="contact.phone" />
    </b-form-group>
    <!--Address-->
    <b-form-group>
      <label for="inputAddress">Address</label>
      <b-form-input type="text" id="inputAddress" placeholder="1234 Main St" class="mb-1" v-model="contact.street" />
    </b-form-group>
    <b-form-row class="mb-3">
      <!--City-->
      <b-col cols="12" sm="6">
        <label for="inputCity">City</label>
        <b-form-input type="text" id="inputCity" v-model="contact.city" />
      </b-col>
      <!--State Dropdown-->
      <b-col cols="6" sm="2">
        <label for="inputState">State</label>
        <b-form-select size v-model="contact.state" :options="states" v-model="contact.state" />
      </b-col>
      <!--Zip-->
      <b-col cols="6" sm="4">
        <label for="inputCity">Zip Code</label>
        <b-form-input type="text" id="inputZip" v-model="contact.zipcode" />
      </b-col>
    </b-form-row>
    <!--Memo-->
    <b-form-group>
      <label for="inputMemo">Notes</label>
      <b-textarea v-model="contact.notes" rows="3" id="inputMemo" />
    </b-form-group>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    showModal: false,
    contact: null,
    states: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN",
        "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
        "NJ", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT",
        "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
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
      return this.contact.firstName + ' ' + this.contact.lastName;
    },
    address(choice) {
      if (choice == 'street')
        return this.contact.street
      if (choice == 'city')
        return this.contact.city
      if (choice == 'state')
        return this.contact.state
      if (choice == 'zipcode')
        return this.contact.zipcode
      else
        return null;
    },
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
  .scrollable-menu {
    max-height: 150px;
    overflow-y: auto;
  }
</style>
