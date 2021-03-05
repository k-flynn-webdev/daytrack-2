<template>

  <div class="column is-11">
    Enjoy, please sign up

    <button @click="test"></button>

  </div>

</template>

<script>

export default {
  name: 'home',

  methods: {
    test () {
      this.$message.add({ message: 'test' })
    }
  }
}
</script>
