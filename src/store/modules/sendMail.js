import axios from "@/plugins/axios";

const baseURL = "send-mail";

const state = {
  dataMessage: [],
};

const getters = {
  dataMessage: (state) => state.dataMessage,
};

// atribuir um valor, realizar alteração
const mutations = {
  setdataMessage(state, data) {
    state.dataMessage = data;
  },
};

const actions = {
  // commit usa a atribuicao criada no mutations
  async sendMessage({ commit }, data) {
    await axios
      .post(`${baseURL}`, data)
      .then((res) => {
        commit("setdataMessage", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
