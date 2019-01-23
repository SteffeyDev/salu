<template>
  <div class="d-flex flex-wrap">
    <ContactCard :key="contact._id" :contact-id="contact._id" v-for="contact in contacts" />
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue'
import { mapState } from 'vuex'

export default {
  computed: mapState({
    contacts: state => state.contacts.filter(contact => contact.name === state.searchText)
  }),
  components: {
    ContactCard
  }
}
</script>

<style>

</style>
