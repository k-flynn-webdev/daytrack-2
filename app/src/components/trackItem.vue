<template>
    <div class="track">
      <span>{{ track.value }}</span>
      <div class="tags">
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
