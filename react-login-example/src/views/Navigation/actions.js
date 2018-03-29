import { logoutAction } from '../../actions/app';

export const HEADER_CLEAN_STATE = 'HEADER_CLEAN_STATE';
export const HEADER_CLICK = 'HEADER_CLICK';
export const cleanStateAction = () => {
    return {
        type: HEADER_CLEAN_STATE
    }
}
export const LogoutHeaderAction = () => {
    return dispatch => {
        dispatch(logoutAction());
    }
}
export const clickHeaderAction = (title) => {
    return {
        type: HEADER_CLICK,
        title
    }
}
