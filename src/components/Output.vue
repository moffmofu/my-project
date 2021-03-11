<template>
  <div class="output">
    <div class="content" v-for="i in 6" :key=i>
      <work
        v-bind:name=i></work>
    </div>
  </div>
</template>

<script>
import Work from '@/components/Work'

export default {
  name: 'Output',
  data () {
    return {
    }
  },
  components: {
    Work
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

img {
  width: 50%;
  align: center;}

</style>
