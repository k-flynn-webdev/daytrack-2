<template>
  <div class="tag bubble is-clickable"
        @click="onClick">
    <span class="value">{{ tag.value }}</span>
    <div v-if="allowInfo"
         class="tag-info">
      <div>created: {{ tag | itemDate }}</div>
      <div>used: {{ tag.count_all }}</div>
    </div>
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
    },
    allowUrl : {
      type: Boolean,
      default: true,
    },
    allowInfo : {
      type: Boolean,
      default: true,
    }
  },

  methods: {
    onClick () {
      if (!this.allowUrl) {
        return this.$emit('click', this.tag)
      }

      this.$router.push({
        name: TAG.route.name,
        params: { tag: this.tag.value }
      })
    }
  }
}
</script>
