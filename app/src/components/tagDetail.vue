<template>
  <div>tag here</div>
</template>

<script>
import { CSRF, TAGS } from '@/constants'
import HttpService from "@/services/HttpService";

export default {
  name: 'TagInfo',

  data () {
    return {
      loading: false,
      form: {
        value: '',
        tags: '',
      }
    }
  },

  created () {
    return this.getTagDetail()
  },

  methods: {
    /** Ensure API returns a legal `CSRF` cookie to improve security */
    getTagDetail () {
      const tagName = this.$route.params.tag
      if (!tagName) return

      return HttpService.get(`${TAGS.API.GET}/${tagName}`)
    },
    // /** Reset Register details */
  //   resetForm () {
  //     this.form.value = ''
  //     this.form.tags = ''
  //   },
  //   /**
  //    * Submit Login details to API for authentication
  //    *
  //    * @returns {void|Promise<boolean>}
  //    */
  //   submit () {
  //     if (this.loading) return
  //     if (!TRACK.isValid(this.form)) return
  //
  //     this.loading = true
  //
  //     return this.$store.dispatch('tracks/post', {
  //       value: this.form.value,
  //       tags: this.form.tags
  //     })
  //     .then(() => {
  //       this.resetForm()
  //       this.getToken()
  //     })
  //     .catch(err => {
  //       // todo: display detail/message
  //     })
  //     .finally(() => this.loading = false)
  //   }
  }
}
</script>
