<template>
  <div class="tag-list-recent">
    <tag-item v-for="item in recentTags"
              :key="item.id"
              :tag="item"
              :allow-url="false"
              :allow-info="false"
              @click="onClick(item)" />
  </div>
</template>

<script>
import HttpService from "@/services/HttpService";
import tagItem from "@/components/tagItem";
import { TAG } from '@/constants'

export default {
  name: 'tags-recent',

  components: {
    tagItem
  },

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
