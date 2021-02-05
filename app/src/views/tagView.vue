<template>

  <div class="column is-11">
    <tag-detail />
  </div>

</template>

<script>
import TagDetail from "@/components/tagDetail";
import { USER } from '@/constants'

export default {
  name: 'Tag',

  props: {
    tag: {
      type: String
    }
  },

  components: {
    TagDetail,
  },

 computed: {
    isLoggedIn () {
      return this.$store.state[USER.store].isLoggedIn
    }
 }
}
</script>
