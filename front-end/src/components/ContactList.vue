<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-between hover-row border-top px-3 py-1" @click="selectContact(contact)" :key="contact._id" v-for="contact in contacts">
      <span>{{ contact.first }} {{ contact.last }}</span>
      <div>
        <Tag :tag="tag" :key="tag" v-for="tag in contact.tags" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tag from './Tag.vue'

export default {
  props: {
  },
  computed: mapState({
    contacts: state => state.contacts || []
  }),
  methods: {
    selectContact(contact) {
      this.$store.commit('search', contact.first + ' ' + contact.last)
    }
  },
  components: {
    Tag
  }
}
</script>

<style>
.hover-row:hover {
  background-color: lightgray;
  cursor: pointer;
}

</style>
