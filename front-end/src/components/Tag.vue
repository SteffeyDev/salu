<template>
  <span class="badge badge-pill mx-1" :style="{ backgroundColor: tagColor }">{{ tag }}</span>
</template>

<script>
import { colorFromString } from '../util'

export default {
  props: {
    tag: String
  },
  computed: {
    tagColor() {
      return '#' + colorFromString(this.tag)
    }
  }
}
</script>
