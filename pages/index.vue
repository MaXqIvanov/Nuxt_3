<template>
  <div>
    IndexPage {{counter}}
    {{prood}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

   computed: {
    counter () {
      return this.$store.state.counter
    },
    prood () {
      return this.$store.state.prood
    }
  },
})
</script>
