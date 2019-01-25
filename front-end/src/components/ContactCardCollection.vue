<template>
  <div class="d-flex flex-wrap">
    <ContactCard :key="contact._id" :contact-id="contact._id" class="m-1" v-for="contact in contacts" />
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue'
import { mapState } from 'vuex'

export default {
  computed: mapState({
    contacts() {
      return this.$store.getters.searchContacts
    }
  }),
  components: {
    ContactCard
  }
}
</script>

<style>

</style>
