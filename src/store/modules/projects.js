// import axios from '@/plugins/axios'

const state = {
  listProjects: [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
      src: require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_1.jpg"),
      name: "Laranjal Paulista",
      images: [
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_1.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_2.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_3.jpg"),
        require("@/assets/img/projects/laranjalPaulista/laranjal_paulista_4.jpeg"),
      ],
    },
    {
      id: "4",
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
