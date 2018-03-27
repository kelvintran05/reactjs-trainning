import axios from 'axios';
export default {
    user: {
        login: (credentials) =>
            axios.post('http://localhost:8080/api/authen', credentials).then(res => res.data)
    }
};