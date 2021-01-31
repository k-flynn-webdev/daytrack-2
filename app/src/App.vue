<template>
  <div id="app"
       class="p-1">

    <div class="columns is-centered">
      <navbar />
      <logout />
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

  components: {
    navbar,
    logout,
  }
}
</script>
