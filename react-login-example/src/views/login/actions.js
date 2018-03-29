import Api from '../../api';
import { loginActionRequest, loginActionSuccess, loginActionError } from '../../actions/app';

export const LOGIN_CLEAN_STATE = 'LOGIN_CLEAN_STATE';

export const cleanStateAction = () => {
    return {
        type: LOGIN_CLEAN_STATE
    }
}
export const loginAction = (email, password) => {
    return dispatch => {
        dispatch(loginActionRequest());
        Api.loginService(email, password)
            .then(credentials => {
                dispatch(loginActionSuccess(credentials));
            })
            .catch(error => {
                dispatch(loginActionError(error));
            })
    }
}

