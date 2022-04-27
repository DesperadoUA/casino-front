import axios from 'axios'
import config from './config';

class DAL_Pages {
    static getData(data) {
        return axios.get(config.API_URL+'pages/' + data.url)
    }
}
export default DAL_Pages

/*
    data.type = 'page';
    data.url = '/';
*/