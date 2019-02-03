<template>
  <b-card class="text-left">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h5 class="card-title mb-0">{{ contact.first }} {{ contact.last }}</h5>
      <div class="ml-3">
        <b-button @click="editContact(contact._id)" variant="secondary" size="sm"><i class="fas fa-edit"></i></b-button>
        <b-button @click="deleteContact(contact._id)" variant="danger" size="sm" class="ml-1"><i class="fas fa-trash"></i></b-button>
      </div>
    </div>
    <p class="mb-1" v-show="contact.email"><i class="fas fa-envelope mr-2"></i><a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
    <p class="mb-1" v-show="contact.phone"><i class="fas fa-phone mr-2"></i><a :href="'tel:' + contact.phone">{{ contact.phone }}</a></p>
    <p class="mb-1" v-show="address"><i class="fas fa-map-marker-alt mr-2"></i><a target="_blank" :href="'https://www.google.com/maps/search/?api=v1&query=' + encodeURIComponent(address)">{{ address }}</a></p>
    <p class="mb-1 d-flex align-items-center" v-show="contact.tags && contact.tags.length > 0">
      <i class="fas fa-tags"></i>
      <button @click="search(tag)" :key="tag" v-for="tag in contact.tags"><Tag :tag="tag" /></button>
    </p>
    <p class="mb-1" v-show="contact.notes"><i class="fas fa-comment mr-2"></i>{{ contact.notes }}</p>
  </b-card>
</template>

<script>
import { mapState } from 'vuex'
import Tag from './Tag.vue'

export default {
  props: {
    contactId: String
  },
  methods: {
    editContact(id) {
      this.$store.commit('editContact', id)
    },
    deleteContact(id) {
      this.$store.dispatch('deleteContact', id)
    },
    search(text) {
      this.$store.commit('search', text)
    }
  },
  computed: mapState({
    contact(state) {
      return state.searchContacts.filter(c => c._id === this.contactId)[0]
    },
    address() {
      let address = ''
      if (this.contact.street)
        address += this.contact.street
      if (this.contact.city)
        address += ', ' + this.contact.city
      if (this.contact.state)
        address += ', ' + this.contact.state
      if (this.contact.zipcode)
        address += ' ' + this.contact.zipcode
      return address.length ? address : null
    }
  }),
  components: {
    Tag
  }
}
</script>

<style>

</style>
