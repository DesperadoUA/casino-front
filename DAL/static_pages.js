import axios from 'axios'
import config from './config';

class DAL_Pages {
    static getData(data) {
        return axios.post(config.API_URL, data)
    }
}
export default DAL_Pages

/*
    data.type = 'page';
    data.url = '/';
*/