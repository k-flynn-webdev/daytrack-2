<template>

  <div class="column is-11">
    <Track />
    <Tracks v-if="isLoggedIn" />
    <div v-else>Not logged in</div>
  </div>

</template>

<script>
import Track from "@/components/Track";
import Tracks from "@/components/Tracks";
import { USER } from '@/constants'

export default {
  name: 'Home',

  components: {
    Track,
    Tracks
  },

 computed: {
    isLoggedIn () {
      return this.$store.state[USER.store].isLoggedIn
    }
 }
}
</script>
