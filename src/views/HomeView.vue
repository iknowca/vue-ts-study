<template lang="">
  <div>
    <button @click="down">down</button>{{count}} <button @click="up">up</button>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

const countModule = "countModule"
export default {
  computed: {
    ...mapState(countModule, ["count"])
  },
  methods: {
    ...mapMutations(countModule, ["SET_COUNT"]),
    up() {
      this.SET_COUNT(this.count+1);
    },
    down() {
      this.SET_COUNT(this.count-1);
    }
  },
}
</script>
<style lang="">
  
</style>