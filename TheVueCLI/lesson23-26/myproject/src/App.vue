<template>

  <div id="app">
    <h1>{{ title }}</h1>
      <Navbar></Navbar>
      <Blogs></Blogs>
  </div>

</template>

<script>

  import Navbar from './Navbar'
  import Blogs from './Blogs'
  

  export default {
    name: 'app',
    components:{
      Navbar,
      Blogs
      
    },
    data () {
      return {
        title: 'my first vue app, woo :)',
      }
    },
    methods:{
      }
    }
  

</script>

<style>

  h1 {
    color: 444;
    font-weight: normal;
    text-align: center;
  }

  span {

    border: 1px dashed black;
    
  }

</style>
