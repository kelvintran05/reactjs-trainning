import { HOME_CLEAN_STATE } from './actions';

const initState = {};

export default (state = initState, action = {}) => {
    const { type } = action;
    switch (type) {
        case HOME_CLEAN_STATE:
            return Object.assign({}, state, initState);
        default: 
            return state;
    }
}