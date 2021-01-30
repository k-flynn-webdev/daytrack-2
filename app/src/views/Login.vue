<template>
  <div class="column is-5-tablet is-4-desktop is-3-widescreen">
    <form class="box"
          @submit.prevent="submit">
      <div class="field">
        <label for="id-login-email" class="label">
          Email
        </label>
        <div class="control has-icons-left">
          <input id="id-login-email"
                 class="input"
                 type="email"
                 placeholder="e.g. bobsmith@gmail.com"
                 required
                 v-model="form.email">
          <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        </div>
      </div>
      <div class="field">
        <label for="id-login-password" class="label">
          Password
        </label>
        <div class="control has-icons-left">
          <input id="id-login-password"
                 type="password"
                 placeholder="*******"
                 class="input"
                 required
                 v-model="form.password">
          <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
        </div>
      </div>
      <div class="field">
        <label for="" class="checkbox">
          <input type="checkbox">
          Remember me
        </label>
      </div>
      <div class="field">
        <button class="button is-success">
          Login
        </button>
      </div>

      <router-link :to="{ name: 'register' }">
        Dont have an account?
      </router-link>
    </form>
  </div>

</template>

<script>
import {CSRF, LOGIN} from '@/constants'
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
    /** Reset Login details */
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
      return HttpService.post(LOGIN.API.POST, this.form)
      .then(data => {
        // this.resetForm()
        // this.$router.push({ name: 'home' })
      })
      .catch(err => {

      })
      .finally(() => this.loading = false)
    }
  }
}
</script>
