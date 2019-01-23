<template>
  <div class="card">
    <div class="card-header">
      <span class="card-title">{{ contact.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    contactId: String
  },
  computed: mapState({
    contact(state) {
      return state.contacts.filter(c => c._id === this.contactId)[0]
    }
  })
}
</script>

<style>

</style>
