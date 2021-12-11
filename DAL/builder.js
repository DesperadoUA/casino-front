import axios from 'axios'
import config from './config'

export default class JsonRequest {
#options = {
		URL_API: config.API_URL,
		POST_TYPE: 'casino',
		URL: '',
		IS_SEARCH: false,
		SEARCH_WORD: ''
	}
	postType(postType) {
		this.#options.POST_TYPE = postType
		return this
	}
	setSearch(flag){
		this.#options.IS_SEARCH = flag
		return this
	}
	searchWold(word){
		this.#options.SEARCH_WORD = word
		return this
	}
	url(data){
		this.#options.URL = data
		return this
	}
	get(){
		if(this.#options.IS_SEARCH) {
			return axios.get(this.#options.URL_API + this.#options.URL,
				{
					params:{
						search_word: this.#options.SEARCH_WORD
		}
		})
		} else {
			return axios.get(this.#options.URL_API + this.#options.POST_TYPE+'/' + this.#options.URL)
		}
	}
}