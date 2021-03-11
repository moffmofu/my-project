<template>
  <div class="output">
    <div class="content">
      <img alt="Vue logo" v-bind:src="image">
      <h3> {{ name }} </h3>
      <p> {{ text }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      name: 'NAME',
      text: 'description',
      image: '@/assets/blue.png'
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
  width: 60%;
  align: center;}

</style>
