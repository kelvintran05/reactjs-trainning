import axios from 'axios';

class Api {
    loginService(email, password) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/api/authen', { email, password } )
                .then(res => resolve(res.data))
                .catch(error => reject(error));
        });
    }
}

export default new Api();
