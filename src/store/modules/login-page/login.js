import axios from "../../../axios";

const state = {
  user_data: null,
};

const getters = {
  user_data: (state) => {
    return state.user_data;
  },
};

const mutations = {
  SET_USER_DATA: (state, data) => {
    state.user_data = data;
  },
};

const actions = {
  async sendForm({ commit }, params) {
    try {
      const response = await axios.post("/login", params);
      window.localStorage.setItem("email", response.data.email);
      window.localStorage.setItem("first_name", response.data.first_name);
      window.localStorage.setItem("last_name", response.data.last_name);
      window.localStorage.setItem("user_id", response.data._id);
      commit("SET_USER_DATA", response);
    } catch (e) {
      return Promise.reject(e);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
