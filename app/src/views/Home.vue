<template>

  <div class="column is-11">
    <Track />
    <Tracks />
  </div>

</template>

<script>
import Track from "@/components/Track";
import Tracks from "@/components/Tracks";

export default {
  name: 'Home',
  components: {
    Track,
    Tracks
  }
}
</script>
