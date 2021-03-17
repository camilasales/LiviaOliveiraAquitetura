import Vue from "vue";
import Vuex from "vuex";

import projects from './modules/projects';
import sendMail from './modules/sendMail';

Vue.use(Vuex);

export default new Vuex.Store({
  //strict: true,
  modules: {
    projects,
    sendMail
  }
})
