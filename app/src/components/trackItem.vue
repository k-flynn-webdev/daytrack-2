<template>
    <div class="track">

        <span>{{ track.value }}</span>
        <div class="tags">
          <span v-for="tag in track.tags"
                :key="tag.id"
                class="tag">
            <span>{{ tag.value }}</span>
          </span>
        </div>
    </div>
</template>

<script>
import { TRACK, TAG } from '@/constants'

export default {
  name: 'track-item',

  props: {
    track: {
      type: Object,
      default: TRACK.default()
    }
  }
}
</script>
