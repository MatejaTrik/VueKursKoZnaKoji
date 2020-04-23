<template>

  <div id="app">
    <h1>{{ title }}</h1>
      <Navbar></Navbar>
      <allFriends :friends="friends" @delete="deleteFriend"></allFriends>
      <onlineFriends :friends="friends"></onlineFriends>
  </div>

</template>

<script>

  import Navbar from './Navbar'
  import allFriends from './AllFriends'
  import onlineFriends from './OnlineFriends'

  export default {
    name: 'app',
    components:{
      Navbar,
      allFriends,
      onlineFriends
    },
    data () {
      return {
        title: 'my first vue app, woo :)',
        friends: [
                { name: 'Mario', online: true },
                { name: 'Luigi', online: false },
                { name: 'Toad', online: true },
                { name: 'Bower', online: false },
        ]
      }
    },
    methods:{
      //      parametar koji nam salje emit
      deleteFriend(payload) {
        console.log(payload)
        this.friends = this.friends.filter(friend => {
          return friend.name !== payload.name
        })
      }
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
