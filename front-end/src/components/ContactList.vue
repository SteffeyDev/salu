<template>
  <div>
    <div class="flex flex-row justify-between contact-row" @click="selectContact" v-for="contact in contacts">
      <span>{{ contact.name }}</span>
      <div>
        <span class="badge badge-pill badge-light mx-1" v-for"label in contact.labels">{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  computed: {
    contacts() {
      return this.$store.state.contacts || []
    }
  },
  methods: {
    selectContact() {
    }
  }
}
</script>

<style>
.contact-row:hover {
  background-color: lightgray;
}

</style>
