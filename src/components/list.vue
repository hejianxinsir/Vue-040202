<template>
  <ul>
    <li>
      <router-link :to="{name: 'helloworld', params: {worldmsg: 'I am worldmsg'}}">helloworld</router-link>
    </li>
    <li>
      <router-link :to="{name: 'janson', params: {jansonmsg: 'I am jansonmsg'}}">janson</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style scoped>
  h1{
    color: brown;
  }
  li{
    list-style: none;
    margin: 20px;
  }
  ul{
    border-top: 3px solid gray;
  }
</style>