<template>
  <b-modal v-if="contact" v-model="showModal" ok-title="Save" size="lg" header-bg-variant="primary" header-text-variant="white"
           hide-header-close :title="cardTitle" @ok="saveContact" @hidden="afterHidden">
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
        <b-form-select size :options="states" v-model="contact.state" />
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
    <!--Tags-->
    <b-form-group>
      <label for="inputTags">Tags</label>
      <p style="font-size: 16pt" v-if="contact.tags.length > 0">
        <Tag :tag="tag" :key="tag" allow-delete @remove="deleteTag" v-for="tag in contact.tags" />
      </p> 
      <b-input-group>
        <b-form-input type="text" id="inputTag" v-model="newTag" list="tag-list" />
        <b-input-group-append>
          <b-btn @click="addTag" variant="info">Add tag</b-btn>
        </b-input-group-append>
      </b-input-group>
      <datalist id="tag-list">
        <option :value="tag" v-for="tag in tagSuggestions">
      </datalist>
    </b-form-group>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
import Tag from './Tag.vue'

export default {
  data: () => ({
    showModal: false,
    contact: null,
    states: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN",
        "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
        "NJ", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT",
        "VT", "VI", "VA", "WA", "WV", "WI", "WY"],
    newTag: ""
  }),
  methods: {
    saveContact(evt) {
      this.$store.dispatch('updateContact', this.contact)
      evt.preventDefault()
    },
    afterHidden() {
      this.$store.commit('endEditing')
    },
    deleteTag: function(tag) {
      this.$delete(this.contact.tags, this.contact.tags.indexOf(tag))
    },
    addTag: function() {
      if (!this.tagColorMap.hasOwnProperty(this.newTag))
        this.$store.commit('addTagToColorMap', this.newTag)
      this.contact.tags.push(this.newTag)
      this.newTag = ""
    },
  },
  computed: mapState({
    contactId: 'editContactId',
    tagColorMap: 'colorMap',
    name() {
      return this.contact.firstName + ' ' + this.contact.lastName;
    },
    tagSuggestions() {
      return this.$store.getters.allTags.filter(tag => this.contact.tags.indexOf(tag) === -1)
    },
    cardTitle() {
      if (this.contactId === 'new')
        return 'New Contact'
      else if (this.contact.first && this.contact.first.length > 0 && this.contact.last && this.contact.last.length)
        return this.contact.first + ' ' + this.contact.last
      else if (this.contact.first && this.contact.first.length > 0)
        return this.contact.first
      else if (this.contact.last && this.contact.first.last > 0)
        return this.contact.last
      else
        return 'Edit Contact'
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
        if (id === 'new') {
          this.contact = {
            first: '',
            last: '',
            email: '',
            phone: null,
            street: null,
            city: null,
            state: null,
            zipcode: null,
            tags: [],
            notes: null 
          }
        } else {
          // JSON parse/stringify is fun trick allowing for deep cloning of objects
          this.contact = Object.assign({ tags: [] }, JSON.parse(JSON.stringify(this.$store.state.contacts.filter(c => c._id === id)[0])))
        }
        this.showModal = true
      } else {
        this.showModal = false
      }
    }
  },
  components: {Tag}
}
</script>

<style>
  .scrollable-menu {
    max-height: 150px;
    overflow-y: auto;
  }
</style>
