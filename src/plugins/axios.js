import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:8080/`
})
Vue.use({
  install(Vue){
    Vue.prototype.$http = axios;
  }
})

export default instance
