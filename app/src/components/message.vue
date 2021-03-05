<template>
  <div ref="message-holder" class="mini-track__messages">
    <div
        v-for="item in items"
        :key="item.id"
        class="mini-track__messages message is-clickable"
        @click="$message.remove(item)">
      {{ item }}
    </div>
  </div>
</template>

<script>

/**
 * @typedef  {object}   Message
 *
 * @property {string}   id            Added on creation
 * @property {string}   message
 * @property {boolean}  closeable
 * @property {number}   timeDelay     Time in seconds
 * @property {number}   timeDisplay   Time in seconds
 */

export default {
  name: 'message',

  data () {
    return {
      items: []
    }
  },

  computed: {
    messages () {
      return this.$message.items
    }
  },

  mounted () {
    this.$message.register(this.items)
    document.body.appendChild(this.$el)
  },
  beforeDestroy () {
    this.$message.unregister(this.items)
    document.body.removeChild(this.$el)
  },
}
</script>


