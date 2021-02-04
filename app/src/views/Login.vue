<template>
  <div class="column is-5-tablet is-4-desktop is-3-widescreen">
    <form class="box"
          @submit.prevent="submit">
      <div class="field">
        <label for="id-email" class="label">
          Email
        </label>
        <div class="control has-icons-left">
          <input id="id-email"
                 v-model="form.email"
                 class="input"
                 type="email"
                 placeholder="e.g. bobsmith@gmail.com"
                 required>
          <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        </div>
      </div>
      <div class="field">
        <label for="id-password"
               class="label">
          Password
        </label>
        <div class="control has-icons-left">
          <input id="id-password"
                 v-model="form.password"
                 type="password"
                 placeholder="*******"
                 class="input"
                 required>
          <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
        </div>
      </div>
      <!--      <div class="field">-->
      <!--        <label for="id-remember" class="checkbox">-->
      <!--          <input id="id-remember" type="checkbox">-->
      <!--          Remember me-->
      <!--        </label>-->
      <!--      </div>-->
      <div class="field">
        <button class="button is-success">
          {{ loading ? '...' : 'Login' }}
        </button>
      </div>

      <router-link :to="{ name: 'register' }">
        Dont have an account?
      </router-link>
    </form>
  </div>

</template>

<script>
import { CSRF, LOGIN } from '@/constants'
import HttpService from '@/services/HttpService'

export default {
  name: 'Login',

  data () {
    return {
      loading: false,
      form: {
        email: '',
        password: '',
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
      this.form.email = 'flynny85@gmail.com'
      this.form.password = 'password'
    },
    /**
     * Submit Login details to API for authentication
     *
     * @returns {void|Promise<boolean>}
     */
    submit () {
      if (this.loading) return
      if (!LOGIN.isValid(this.form)) return

      this.loading = true

      return this.$store.dispatch('user/login', {
        email: this.form.email,
        password: this.form.password
      })
      .then(() => {
        this.resetForm()
        this.$nextTick(() => {
          this.$router.push({ name: 'tracks' })
        })
      })
      .catch(err => {
        // todo: display detail/message
      })
      .finally(() => this.loading = false)
    }
  }
}
</script>
