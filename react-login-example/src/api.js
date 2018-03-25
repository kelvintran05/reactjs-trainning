import axios from 'axios';
export default {
    user: {
        login: (credentials) =>
            axios.post('http://localhost:5000/api/authen', { credentials }).then(res => res.data)
    }
};