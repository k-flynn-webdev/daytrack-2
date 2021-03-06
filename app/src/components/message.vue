<template>
  <div ref="message-holder" class="mini-track messages">
    <div
        v-for="item in items"
        :key="item.id"
        class="mb-2">

      <div class="message"
           :class="item.class">
        {{ item.message }}

        <span v-if="item.closeable"
              class="is-clickable"
              @click="$message.remove(item)">
          <svg class="icon close" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <path d="M100,68.887l50.205,-50.204l31.112,31.112l-50.204,50.205l50.204,50.205l-31.112,31.112l-50.205,-50.204l-50.205,50.204l-31.112,-31.112l50.204,-50.205l-50.204,-50.205l31.112,-31.112l50.205,50.204Z" />
          </svg>
        </span>

      </div>

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
    document.body.prepend(this.$el)
  },
  beforeDestroy () {
    this.$message.unregister(this.items)
    document.body.removeChild(this.$el)
  },
}
</script>


