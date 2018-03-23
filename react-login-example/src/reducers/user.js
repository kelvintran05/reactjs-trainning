import { USER_LOGGER_IN } from "../types";

export default function user(state = {}, action = {}) {
    switch (action.type) {
        case USER_LOGGER_IN:
            return action.user;
        default:
            return state;
    }
}