import DAL_Pages from '~/DAL/static_pages'

export const state = () => ({
    body: null
})
export const mutations = {
    setState(state, data) {
        state.body = data
    }
}
export const actions = {
    async setState({commit}, state) {
        localStorage.setItem('test', 'Key')
        //localStorage.getItem('options')
        /*
        if(this.state.options.options === null)  {
            const dataOptions = localStorage.getItem('options')
            if(dataOptions) {
                commit('setOptions', JSON.parse(dataOptions))
            } else {
                const result = await DAL_Options.getOptions()
                commit('setOptions', result.data)
                localStorage.setItem('options', JSON.stringify(result.data))
            }
        } */
    },
}
export const getters = {
    getState(state) {
        return state.body
    },
}