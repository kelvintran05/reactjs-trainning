import api from '../../api';
// import jwtDecode from 'jwt-decode';
export const USER_LOGGER_IN = "USER_LOGGER_IN";
export const setCurrentUser = (user) => ({
    type: USER_LOGGER_IN,
    user
})

export const login = (credentials) => {
    credentials.isAuthenticated=true;
    console.log(credentials);
    localStorage.setItem('data',credentials.data.email);
    return dispatch => {
        return api.user.login(credentials).then(user => {
            // const token = user.credentials.token;
            // localStorage.setItem('jwtToken', token);
            dispatch(setCurrentUser(user));
        });
    }
}

