import Vue from 'vue/dist/vue.esm'
import Room from '../room2.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#room',
    data: {
    },
    components: { Room }
  })
})
