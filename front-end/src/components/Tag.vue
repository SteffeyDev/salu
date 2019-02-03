<template>
  <span class="badge badge-pill mx-1" :class="{ 'pr-1': allowDelete }" :style="{ backgroundColor: tagColor, color: textColor }">
   {{ tag }}
   <button class="ml-1" v-if="allowDelete" @click="$emit('remove', tag)" title="Remove Tag">
     <i class ="fas fa-times-circle"></i>
   </button>
  </span>
</template>

<script>
import yiq from 'yiq'
import { mapState } from 'vuex'

export default {
  props: {
    tag: String,
    allowDelete: Boolean
  },
  computed: mapState({
    textColor(state) {
      return yiq(state.colorMap[this.tag])
    },
    tagColor(state) {
      return state.colorMap[this.tag]
    }
  })
}
</script>
