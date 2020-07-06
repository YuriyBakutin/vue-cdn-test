windows.Vue.use(windows.Vuex)

export default new windows.Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
