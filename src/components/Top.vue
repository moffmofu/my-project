<template>
  <div class="top">
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      name: 'NAME',
      text: 'top pagelll'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.top {
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

</style>
