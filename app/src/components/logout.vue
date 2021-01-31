<template>
  <div class="column is-narrow">
    <button v-if="isLoggedIn"
            class="button is-success"
            @click="submit">
      {{ loading ? '...' : 'Logout' }}
    </button>
    <router-link v-else
                 :to="{ name: 'login' }">
      Login
    </router-link>
  </div>
</template>

<script>
import { CSRF } from '@/constants'
import HttpService from '@/services/HttpService'

export default {
  name: 'Logout',

  data () {
    return {
      loading: false,
    }
  },

  created () {
    // todo check if logged in?
    return this.getToken()
  },

  computed: {
    isLoggedIn () {
      return this.$store.state.user.isLoggedIn
    }
  },

  methods: {
    /** Ensure API returns a legal `CSRF` cookie to improve security */
    getToken () {
      return HttpService.get(CSRF.API.GET)
    },
    /**
     * Submit Login details to API for authentication
     *
     * @returns {void|Promise<boolean>}
     */
    submit () {
      if (this.loading) return

      this.loading = true

      return this.$store.dispatch('user/logout')
      .then(() => this.$router.push({ name: 'home' }))
      .catch(err => {
        // todo: display detail/message
      })
      .finally(() => this.loading = false)
    }
  }
}
</script>
