import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import Janson from '../components/Janson'

Vue.use(router)

export default new router({
  routes: [{
    name: 'helloworld',
    path: '/helloworld/:worldmsg',
    component: HelloWorld
  },{
    name: 'janson',
    path: '/janson/:jansonmsg',
    component: Janson
  }]
})