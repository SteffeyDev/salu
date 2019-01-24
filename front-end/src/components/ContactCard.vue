<template>
  <b-card class="text-left">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h5 class="card-title mb-0">{{ contact.name }}</h5>
      <button class="btn btn-light btn-sm ml-3"><i class="fas fa-edit"></i></button>
    </div>
    <p class="mb-1" v-show="contact.email"><i class="fas fa-envelope mr-2"></i><a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
    <p class="mb-1" v-show="contact.phone"><i class="fas fa-phone mr-2"></i><a :href="'tel:' + contact.phone">{{ contact.phone }}</a></p>
    <p class="mb-1" v-show="address"><i class="fas fa-map-marker-alt mr-2"></i>{{ address }}</p>
    <p class="mb-1" v-show="contact.tags && contact.tags.length">
      <i class="fas fa-tags"></i>
      <Tag :tag="tag" :key="tag" v-for="tag in contact.tags" />
    </p>
  </b-card>
</template>

<script>
import { mapState } from 'vuex'
import Tag from './Tag.vue'

export default {
  props: {
    contactId: String
  },
  computed: mapState({
    contact(state) {
      return state.contacts.filter(c => c._id === this.contactId)[0]
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
