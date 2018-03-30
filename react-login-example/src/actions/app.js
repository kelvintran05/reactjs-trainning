export const APP_LOGIN_REQUEST = 'APP_LOGIN_REQUEST';
export const APP_LOGIN_SUCCESS = 'APP_LOGIN_SUCCESS';
export const APP_LOGIN_ERROR = 'APP_LOGIN_ERROR';
export const APP_LOGOUT = 'APP_LOGOUT';
export const APP_UPDATE_ACTION = 'APP_UPDATE_ACTION';

export const loginActionRequest = () => {
    return {
        type: APP_LOGIN_REQUEST
    }
} 
export const loginActionSuccess = (credentials) => {
    // console.log(credentials);
    localStorage.setItem('data', credentials.email.email);                
    return {
        type: APP_LOGIN_SUCCESS
    }
} 
export const loginActionError = (error) => {
    return {
        type: APP_LOGIN_ERROR,
        payload: error
    }
} 
export const logoutAction = () => {
    localStorage.removeItem('data');    
    return {
        type: APP_LOGOUT
    }
} 
export const updateAppStateAction = () => {
    const isLogin = localStorage.getItem('data') ? true : false;    
    return {
        type: APP_UPDATE_ACTION,
        payload: { isLogin }
    }
} 
