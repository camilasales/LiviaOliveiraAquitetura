import Vue from "vue";
import axios from "axios";

const instance = axios.create({
  baseURL: `https://livia-arquitetura-api.herokuapp.com/`,
});
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});

export default instance;
