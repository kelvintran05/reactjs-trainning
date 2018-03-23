import { USER_LOGGER_IN } from "../types";
import api from "../api";

export const userLoggedIn = (user) =>({
    type: USER_LOGGER_IN,
    user
})

export const login = credentials => dispatch => 
api.user.login(credentials).then(user=>dispatch(userLoggedIn(user)));