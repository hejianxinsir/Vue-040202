<template>
  <div class="hello">
    <h2>{{$route.params.worldmsg}}</h2>
    <h2>我是 axios app，用来发送请求，拦截响应</h2>
    <button @click="getData()">发送请求</button>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios

export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getData(){
      let self = this

      // 传参写法一： this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=10')

      // 传参写法二
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 1,
          limit: 10
        }
      })
        .then(function(res){
          console.log('success')
          self.items = res.data.data
          console.log(self.items)
        })
        .catch(function(err){
          console.log('fail')
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: darkblue;
}
li{
  list-style: none;
  margin: 30px 0;
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
}
</style>
