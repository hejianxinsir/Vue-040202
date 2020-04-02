<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ $route.params.jansonmsg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Janson',
  data(){
    return {
      msg: '没错，你来到了 Janson 页'
    }
  }
}
</script>

<style scoped>
h1{
  color: brown;
}
</style>