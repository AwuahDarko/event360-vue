
const location = new Object();

const state = {
    location: location
}


const getters = {
    getLocation: (state) => state.location
}

const actions = {
    onLocationSelected({ commit }, location){
        commit('setLocation', location)
    }
}

const mutations = {
    setLocation: (state, location) => (state.location = location)
}

export default {
    state,
    getters,
    actions,
    mutations
}