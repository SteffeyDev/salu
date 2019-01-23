<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-between hover-row px-3 py-1" @click="selectContact(contact.name)" :key="contact._id" v-for="contact in contacts">
      <span>{{ contact.name }}</span>
      <div>
        <b-badge pill variant="light" class="mx-1" :key="tag" v-for="tag in contact.tags">{{ tag }}</b-badge>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
  },
  computed: mapState({
    contacts: state => state.contacts || []
  }),
  methods: {
    selectContact(name) {
      this.$store.commit('search', name)
    }
  }
}
</script>

<style>
.hover-row:hover {
  background-color: lightgray;
  cursor: pointer;
}

</style>
