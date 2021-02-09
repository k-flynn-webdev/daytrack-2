<template>
    <div class="track">

      <div class="notification bubble">
        {{ track.value }}

        <div v-if="track.tags.length"
             class="tags">
          <tag-item v-for="tag in track.tags"
                    :key="tag.id"
                    :tag="tag">
          </tag-item>
        </div>

        <div v-else
             class="mt-1"></div>
      </div>

    </div>
</template>

<script>
import { TRACK, TAG } from '@/constants'
import tagItem from "@/components/tagItem";

export default {
  name: 'track-item',

  components: {
    tagItem
  },

  props: {
    track: {
      type: Object,
      default: TRACK.default()
    }
  }
}
</script>
