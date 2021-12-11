import axios from 'axios'
import config from './config'
class DAL_Options {
    static getOptions() {
        return axios.post(config.API_URL+'options/')
    }
}
export default DAL_Options