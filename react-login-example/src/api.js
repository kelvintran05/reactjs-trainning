import axios from 'axios';
export default {
    user: {
        login: (credentials) =>
            axios.post('http://192.168.210.78:8080/api/authen', { credentials }).then(res => res.data)
    }
};