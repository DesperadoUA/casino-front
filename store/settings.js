import DAL_Settings from '~/DAL/settings'

export const state = () => ({
    settings: null
})
export const mutations = {
    setSettings(state, data) {
        state.settings = data
    }
}
export const actions = {
    async setSettings({commit}, data) {
        if(this.state.settings.settings === null)  {
            const result = await DAL_Settings.getSettings(data)
            commit('setSettings', result.data.body)
        } 
    },
}
export const getters = {
    getSettings(state) {
        return state.settings
    },
}