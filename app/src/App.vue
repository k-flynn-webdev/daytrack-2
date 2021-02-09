<template>
  <div id="app"
       class="daytrack p-1">

    <div class="columns is-centered">
      <div class="column is-11 columns is-mobile">
        <navbar />
        <div class="title is-2 has-text-centered column is-grow">
          {{ $route.meta.title }}
        </div>
        <logout />
      </div>
    </div>

    <div class="columns is-centered">
      <router-view />
    </div>

  </div>
</template>

<script>
import navbar from '@/components/navbar'
import logout from '@/components/logout'

export default {
  name: 'app',

  data () {
    return {
      title: 'Tracks'
    }
  },

  components: {
    navbar,
    logout,
  },

  methods: {
    onTitle (input) {
      this.title = input
    }
  },

}
</script>
