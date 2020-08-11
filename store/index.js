export const state = () => ({
  detailArray: []
})
export const getters = {
  getDetail: (state) => {
    return state.detailArray;
  }
}

export const mutations = {
  updateDetailArray(state, payload) {
    state.detailArray = payload
  }
}
export const actions = {
  getDetailArray(vuexContext, payload) {
    state.detailArray = []
    vuexContext.commit("updateDetailArray", payload);
    this.$router.push('/' + 1)
  }
}

export const strict = false