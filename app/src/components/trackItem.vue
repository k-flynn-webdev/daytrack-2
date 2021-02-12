<template>
    <div class="track">

      <div class="track__body bubble"
           :class="{ 'has-tags': track.tags.length > 0 }">
        {{ track.value }}

        <div class="track__body-time is-size-7">
          {{ track | tagDate }}
        </div>

      </div>

      <div class="tag-list">
        <tag-item v-for="tag in track.tags"
                  :key="tag.id"
                  :tag="tag">
        </tag-item>
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
