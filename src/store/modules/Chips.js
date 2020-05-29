

const chips = []

const state = {
    chips
}


const getters = {
    allChips: (state) => state.chips

}

const actions = {
    onChipSaved({ commit }, chips){
        commit('setChips', chips)
    }   
}

const mutations = {
    setChips: (state, chip) => (state.chips = chip)
}

export default {
    state,
    getters,
    actions,
    mutations
}