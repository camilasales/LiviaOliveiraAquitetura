import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "core-js/stable";
import "regenerator-runtime/runtime";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "mdi",
  },
};

export default new Vuetify(opts);
