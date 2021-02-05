<template>
    <div class="track-list">

      <track-item v-for="item in trackList"
           :key="item.id"
           :track="item" />

      <div v-if="trackList.length < 1">
        No Tracks
      </div>

    </div>
</template>

<script>
import { TRACK } from '@/constants'
import trackItem from "@/components/trackItem";

export default {
  name: 'track-list',

  components: {
    trackItem
  },

  data () {
    return {
      loading: false,
    }
  },

  computed: {
    trackList () {
      return this.$store.state[TRACK.store].trackList
    }
  },

  created () {
    return this.getTrackList()
  },

  methods: {
    /** Ensure API returns track list on init */
    getTrackList () {
      if (this.loading) return

      this.loading = true

      return this.$store.dispatch('track/get')
      .finally(() => this.loading = false)
    },
  }
}
</script>
