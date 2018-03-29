import { logoutAction } from '../../actions/app';

export const HOME_CLEAN_STATE = 'HOME_CLEAN_STATE';

export const cleanStateAction = () => {
    return {
        type: HOME_CLEAN_STATE
    }
}
export const homeLogoutAction = () => {
    return dispatch => {
        dispatch(logoutAction());
    }
}

