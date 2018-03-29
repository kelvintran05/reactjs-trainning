import { HEADER_CLEAN_STATE, HEADER_CLICK } from './actions';

const initState = {
    isClick: false,
    titleName: ""
};

export default (state = initState, action = {}) => {
    const { type } = action;
    const count = initState.count;
    switch (type) {
        case HEADER_CLEAN_STATE:
            return Object.assign({}, state, initState);
        case HEADER_CLICK:
            return Object.assign({}, state, { isClick: true, titleName: action.title });
        default:
            return state;
    }
}