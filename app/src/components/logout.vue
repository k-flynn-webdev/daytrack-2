<template>
  <div class="">
    <div v-if="isLoggedIn">
      <span class="mr-2">{{ userName }}</span>
      <button class="button is-success is-smaller"
              @click="submit">
        <svg class="icon close" viewBox="0 0 200 200" version="1.1"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
             style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
          <path d="M100,68.887l50.205,-50.204l31.112,31.112l-50.204,50.205l50.204,50.205l-31.112,31.112l-50.205,-50.204l-50.205,50.204l-31.112,-31.112l50.204,-50.205l-50.204,-50.205l31.112,-31.112l50.205,50.204Z" />
        </svg>
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
