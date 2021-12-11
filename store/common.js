export const state = () => ({
	common: {
		showSearch: false,
		mobileMenu: false
	}
})
export const mutations = {
	setShowSearch(state, data) {
		state.common.showSearch = data
	},
	setMobileMenu(state, data){
		state.common.mobileMenu = data
	}
}
export const actions = {
	setShowSearch({commit}, data) {
		commit('setShowSearch', data)
	},
	setMobileMenu({commit}, data){
		commit('setMobileMenu', data)
	}
}
export const getters = {
	getShowSearch(state) {
		return state.common.showSearch
	},
	getMobileMenu(state) {
		return state.common.mobileMenu
	},
}