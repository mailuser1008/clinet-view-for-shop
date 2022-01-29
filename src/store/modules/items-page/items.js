import axios from "../../../axios";

const state = {
  items: [],
};
const getters = {
  items: (state) => {
    return state.items;
  },
};
const mutations = {
  SET_ITEMS: (state, data) => {
    state.items = data.data;
  },
};
const actions = {
  async getItems(context) {
    try {
      const response = await axios.get("get-items");
      context.commit("SET_ITEMS", response);
      console.log(response);
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
