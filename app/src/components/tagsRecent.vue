<template>
  <div class="tags-recent-list">
    <div v-for="item in recentTags"
          :key="item.id"
          class="tag is-clickable mr-1"
          @click="onClick(item)">
      <span class="value">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
import HttpService from "@/services/HttpService";
import { TAG } from '@/constants'

export default {
  name: 'tags-recent',

  data () {
    return {
      recentTags: []
    }
  },

  created () {
    return this.getRecentTags()
  },

  methods: {
    getRecentTags () {
      return HttpService.get(TAG.API.GET, { params: { limit: 5 } })
      .then(({ data }) => {
        this.recentTags = data.results
      })
      .catch(err => {

      })
    },
    onClick(item) {
      this.$emit('tag-add', item)
      for(let i = 0, max = this.recentTags.length; i < max; i++) {
        if (this.recentTags[i].value === item.value) {
          this.recentTags.splice( i, 1)
          return
        }
      }
      // now kill this tag in the list ..
    }
  }
}
</script>
