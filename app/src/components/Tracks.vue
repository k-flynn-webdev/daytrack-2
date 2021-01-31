<template>
    <div class="tracks">
      <div v-for="item in tracks"
           :key="item.id"
           class="track">
        {{ item }}
      </div>
    </div>
</template>

<script>
import { TRACKS } from '@/constants'

export default {
  name: 'Tracks',

  data () {
    return {
      loading: false,
    }
  },

  computed: {
    tracks () {
      return this.$store.state[TRACKS.store].tracks
    }
  },

  created () {
    return this.getTracks()
  },

  methods: {
    /** Ensure API returns tracks on init */
    getTracks () {
      if (this.loading) return

      this.loading = true

      return this.$store.dispatch('tracks/get')
      .finally(() => this.loading = false)
    },
  }
}
</script>
