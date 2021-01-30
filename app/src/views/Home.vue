<template>

  <div>
    <h1 class="is-size-1">
      Track
    </h1>

    <form @submit.prevent="submit">
      <div class="field">
        <div class="control">
          <input class="input"
                 type="text"
                 v-model="form.value"
          >
        </div>
      </div>
      <button class="button"
              type="submit">
        Create
      </button>
    </form>
  </div>

</template>

<script>
import { TRACK } from '@/constants'
import HttpService from '@/services/HttpService'

export default {
  name: 'Track.Create',

  data () {
    return {
      loading: false,
      form: {
        value: '',
      }
    }
  },

  created () {
    return this.getToken()
  },

  methods: {
    /** Ensure API returns a legal `CSRF` cookie to improve security */
    getToken () {
      return HttpService.get(TRACK.API.TOKEN)
    },
    /**
     * Submit Track to API for creation
     *
     * @returns {Promise<boolean>|void}
     */
    submit () {
      if (this.loading) return
      if (!TRACK.isValid(this.form.value)) return

      this.loading = true
      return HttpService.post(TRACK.API.POST, this.form)
      .then(data => {

      })
      .catch(err => {

      })
      .finally(() => this.loading = false)
    }
  }
}
</script>
