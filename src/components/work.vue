<template>
  <div class="output">
    <img alt="Vue logo" v-bind:src="@/assets/blue.png">
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      name: 'NAME',
      text: 'description'
    }
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
