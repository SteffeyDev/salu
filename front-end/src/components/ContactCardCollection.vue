<template>
  <div id="contact-collection" v-bind-to-height class="d-flex flex-wrap">
    <p v-if="contacts.length === 0 && !loading" class="text-muted w-100 text-center">No contacts match your search</p>
    <ContactCard :key="contact._id" :contact-id="contact._id" class="m-1" v-for="contact in contacts" />
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue'
import { mapState } from 'vuex'

export default {
  computed: mapState({
    contacts: 'searchContacts',
    loading: 'loadingSearch'
  }),
  components: {
    ContactCard
  }
}
</script>

<style lang="scss">
#contact-collection {
  padding-bottom: 30px;
}

</style>
