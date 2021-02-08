<template>
  <div class="track-create">
    <form class="track"
          @submit.prevent="submit">
      <div class="field">
        <div class="control">
          <input id="id-track"
                 v-model="form.value"
                 class="input"
                 type="text"
                 placeholder="..What happened?"
                 required>
        </div>
      </div>
      <div class="field is-flex">
        <div class="control is-flex-grow-1">
          <input id="id-tags"
                 v-model="form.tags"
                 type="text"
                 placeholder="..#Tags"
                 class="input">
        </div>
        <button class="button is-success add ml-1">
          {{ loading ? '...' : 'Add' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { CSRF, TRACK } from '@/constants'
import HttpService from "@/services/HttpService";

export default {
  name: 'Track',

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
    return this.getToken()
        .then(() => this.resetForm())
  },

  methods: {
    /** Ensure API returns a legal `CSRF` cookie to improve security */
    getToken () {
      return HttpService.get(CSRF.API.GET)
    },
    /** Reset Register details */
    resetForm () {
      this.form.value = ''
      this.form.tags = ''
    },
    /**
     * Submit Login details to API for authentication
     *
     * @returns {void|Promise<boolean>}
     */
    submit () {
      if (this.loading) return
      if (!TRACK.isValid(this.form)) return

      this.loading = true

      return this.$store.dispatch('track/post', {
        value: this.form.value,
        tags: this.form.tags
      })
      .then(() => {
        this.resetForm()
        this.getToken()
      })
      .catch(err => {
        // todo: display detail/message
      })
      .finally(() => this.loading = false)
    }
  }
}
</script>
