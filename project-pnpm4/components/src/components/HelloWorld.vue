<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是公共的HelloWorld组件'
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      const max = 999
      const increment = x => x + 66
      const result = increment(max)
      console.log(increment)
      console.log(`the result is ${result}`)
    }
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
</style>
