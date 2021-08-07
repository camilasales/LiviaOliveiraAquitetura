// import axios from '@/plugins/axios'

const state = {
  listProjects: [
    {
      id: "1",
      src: require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_1.jpg"),
      name: "Laranjal Paulista",
      images: [
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_1.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_2.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_3.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_4.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_5.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_6.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_7.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_8.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_9.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_10.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_11.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_12.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_13.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_14.jpg"),
      ],
    },

    {
      id: "2",
      src: require("@/assets/img/projects/residencialManhattan/residencial_manhatan_27.jpg"),
      name: "Residencial Manhattan",
      images: [
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_1.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_2.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_3.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_4.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_5.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_6.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_7.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_8.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_9.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_10.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_11.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_12.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_13.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_14.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_15.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_16.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_17.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_18.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_19.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_20.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_21.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_22.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_23.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_24.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_25.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_26.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_27.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_28.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_29.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_20.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_31.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_32.jpg"),
        require("@/assets/img/projects/residencialManhattan/residencial_manhatan_33.jpg"),
      ],
    },

    {
      id: "3",
      src: require("@/assets/img/projects/planoButanta/plano_butanta_1.jpg"),
      name: "Plano Butantã",
      images: [
        require("@/assets/img/projects/planoButanta/plano_butanta_1.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_2.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_3.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_4.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_5.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_6.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_7.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_8.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_9.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_10.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_11.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_12.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_13.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_14.jpg"),
        require("@/assets/img/projects/planoButanta/plano_butanta_15.jpg"),
      ],
    },

    {
      id: "4",
      src: require("@/assets/img/projects/casaPerdizes/casa_perdizes_1.jpg"),
      name: "Casa Perdizes",
      images: [
        require("@/assets/img/projects/casaPerdizes/casa_perdizes_1.jpg"),
        require("@/assets/img/projects/casaPerdizes/casa_perdizes_2.jpg"),
        require("@/assets/img/projects/casaPerdizes/casa_perdizes_3.jpg"),
        require("@/assets/img/projects/casaPerdizes/casa_perdizes_4.jpg"),
      ],
    },

    {
      id: "5",
      src: require("@/assets/img/projects/ap603/ap603_1.jpg"),
      name: "Apartamento 603",
      images: [
        require("@/assets/img/projects/ap603/ap603_1.jpg"),
        require("@/assets/img/projects/ap603/ap603_2.jpg"),
        require("@/assets/img/projects/ap603/ap603_3.jpg"),
        require("@/assets/img/projects/ap603/ap603_4.jpg"),
      ],
    },

    {
      id: "6",
      src: require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_1.jpg"),
      name: "Residencial Piracicaba",
      images: [
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_1.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_2.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_3.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_4.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_5.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_6.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_7.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_8.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_9.jpg"),
        require("@/assets/img/projects/residencialPiracicaba/residencial_piracicaba_10.jpg"),
      ],
    },

    {
      id: "7",
      src: require("@/assets/img/projects/ap1135/ap1135_1.jpeg"),
      name: "Apartamento 1135",
      images: [
        require("@/assets/img/projects/ap1135/ap1135_1.jpeg"),
        require("@/assets/img/projects/ap1135/ap1135_2.jpeg"),
        require("@/assets/img/projects/ap1135/ap1135_3.jpeg"),
        require("@/assets/img/projects/ap1135/ap1135_4.jpeg"),
        require("@/assets/img/projects/ap1135/ap1135_5.jpeg"),
        require("@/assets/img/projects/ap1135/ap1135_6.jpeg"),
        require("@/assets/img/projects/ap1135/ap1135_7.jpeg"),
        require("@/assets/img/projects/ap1135/ap1135_8.jpeg"),
      ],
    },

    {
      id: "8",
      src: require("@/assets/img/projects/residencial50/residencial50_1.jpg"),
      name: "Residencial 50",
      images: [
        require("@/assets/img/projects/residencial50/residencial50_1.jpg"),
      ],
    },
  ],
  project: [],
};
const getters = {
  listProjects: (state) => state.listProjects,
  selectProject: (state) => state.project,
};

// atribuir um valor, realizar alteração do estado
const mutations = {
  setListProjects(state, data) {
    return data;
  },
  pushProject(state, id) {
    state.project = [];
    state.listProjects.map((item) => {
      if (id == item.id) {
        state.project.push(item);
      }
      return state.project;
    });
  },
};

const actions = {
  // commit usa a atribuicao criada no mutations
  async getAllProjects({ commit, state }) {
    await setTimeout(() => {
      commit("setListProjects", state.listProjects);
    }, 1000);
  },
  async getProject({ commit }, id) {
    await setTimeout(() => {
      commit("pushProject", id);
    }, 1000);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
