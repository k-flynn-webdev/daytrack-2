<template>
  <div class="">
    <div v-if="isLoggedIn">
      <span class="mr-2">{{ userName }}</span>
      <button class="button is-success"
              @click="submit">
        {{ loading ? '-~-' : 'X' }}
      </button>
    </div>

    <router-link v-else
                 :to="{ name: 'login' }">
      Login
    </router-link>
  </div>
</template>

<script>
import { CSRF, USER } from '@/constants'
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
    userName () {
      return this.$store.state[USER.store].user.name
    },
    isLoggedIn () {
      return this.$store.state[USER.store].isLoggedIn
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
      .then(() => {
          this.$router.push({ name: 'home' })
      })
      .catch(err => {
        // todo: display detail/message
      })
      .finally(() => this.loading = false)
    }
  }
}
</script>
