<template>
   <div class="add">
      <canvas id="space"></canvas>
   </div>
</template>
<script>
import canvasFunc from '../utils/canvas'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    test () {

    }
  },
  created () {

  },
  mounted () {
    canvasFunc()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.add{
  height:100%;
  /* background:#42b983; */
}
</style>
