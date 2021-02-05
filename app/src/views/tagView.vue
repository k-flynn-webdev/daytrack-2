<template>

  <div class="column is-11">
<!--    <tag-detail />-->
  </div>

</template>

<script>
// import TagDetail from "@/components/tagDetail";
import { TAG, USER } from '@/constants'
import HttpService from "@/services/HttpService";

export default {
  name: 'tag-view',

  data () {
    return {
      detail: null
    }
  },

  props: {
    tag: {
      type: String,
      default: ''
    }
  },

  components: {
    // TagDetail,
  },

 computed: {
    isLoggedIn () {
      return this.$store.state[USER.store].isLoggedIn
    }
 },

  methods: {
    getTagDetail () {
      if (!this.tag) return

      return HttpService.get(`${TAG.API.GET}/${this.tag}`)
      .then(({ data }) => {
        this.detail = data.results
      })
    },
  }
}
</script>
