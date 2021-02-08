<template>
  <div class="tag is-clickable"
        @click="onClick">
    #{{ tag.value }}
  </div>
</template>

<script>
import { TAG } from '@/constants'

export default {
  name: 'tag-item',

  props: {
    tag: {
      type: Object,
      default: TAG.default()
    }
  },

  methods: {
    onClick () {
      this.$router.push({ name: TAG.route.name, params: { tag: this.tag.value } })
    }
  }
}
</script>
