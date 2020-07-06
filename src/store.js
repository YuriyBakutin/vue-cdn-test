const MAX_COUNT = 3

export default new Vuex.Store({
    state: {
        count: MAX_COUNT
    },
    getters: {
        getCount: ( state ) => {
            return state.count
        },
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
            if ( state.count == 0 ) {
                state.count = MAX_COUNT
            }
        },
    },
    actions: {
        increment: ( { commit } ) => {
            commit( 'increment' )
        },
        decrement: ( { commit } ) => {
            commit( 'decrement' )
        },
    },
})
