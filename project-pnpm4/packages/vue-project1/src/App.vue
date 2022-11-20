<template>
  <div id="app">
    hello world
    <HelloWorld></HelloWorld>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// import {
//   isUndef,
//   increment,
//   decrement
// } from '@rf/tools/index-demo.js'
import { HelloWorld } from '@rf/components'
import {
  add
} from '@rf/tools'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created () {
    // const name = 'xiaoming'
    // console.log(isUndef(name))
    // console.log(increment)
    // console.log(increment(56))
    // const decrement2 = x => x - 222
    // console.log(decrement)
    // console.log(decrement2)

    console.log(add)
    console.log(add(18))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
