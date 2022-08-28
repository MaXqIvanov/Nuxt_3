<template>
  <div>
    IndexPage {{counter}}
    {{prood}}
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async fetch({ store }) {

	},
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
