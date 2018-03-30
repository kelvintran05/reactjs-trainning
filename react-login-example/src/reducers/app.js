import { APP_LOGIN_REQUEST, APP_LOGIN_SUCCESS, APP_LOGIN_ERROR, APP_LOGOUT, APP_UPDATE_ACTION } from '../actions/app';

const initState = {
    isLogin: false,
    error: null
};

export default (state = initState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case APP_UPDATE_ACTION:
            return Object.assign({}, state, { isLogin: payload.isLogin });
            
        case APP_LOGIN_REQUEST:
            return Object.assign({}, state, { isLogin: false, error: null });
        case APP_LOGIN_SUCCESS:
            return Object.assign({}, state, { isLogin: true });
        case APP_LOGIN_ERROR:
            return Object.assign({}, state, { error: payload.error });

        case APP_LOGOUT:
            return initState;
        default: return state;
    }
}