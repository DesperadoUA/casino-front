import axios from 'axios'
import config from './config'
class DAL_Settings {
    static getSettings(data) {
        return axios.get(config.API_URL+'settings', data)
    }
}
export default DAL_Settings