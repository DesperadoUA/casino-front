import axios from 'axios'
import config from './config';

class DAL_Reviews {
    static setReview(data) {
        return axios.post(config.API_URL+'reviews/', data)
    }
}
export default DAL_Reviews

/*
    data.id = 'post_id';
    data.name = 'Name review';
    data.email = 'Email review';
    data.text = 'Text review';
    data.rating = 'Rating review';
*/