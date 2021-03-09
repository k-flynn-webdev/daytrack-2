<template>
  <div class="tag bubble is-clickable"
       :class="{ 'show-close' : showClose }"
       @click="onClick">
      <span class="value">{{ tag.value }}</span>
      <div v-if="allowInfo"
           class="tag-info">
        <div>created: {{ tag | itemDate }}</div>
        <div>used: {{ tag.count_all }}</div>
      </div>
      <svg
          v-if="showClose"
          class="icon"
          viewBox="0 0 200 200" version="1.1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
          style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M100,68.887l50.205,-50.204l31.112,31.112l-50.204,50.205l50.204,50.205l-31.112,31.112l-50.205,-50.204l-50.205,50.204l-31.112,-31.112l50.204,-50.205l-50.204,-50.205l31.112,-31.112l50.205,50.204Z" />
      </svg>
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
    },
    showClose: {
      type: Boolean,
      default: false
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
