const USER_LOGGER_IN = "USER_LOGGER_IN";
// const initState = {
//   data: {
//     email: '',
//     password: ''
//   },
//   isAuthenticated: false,
//   errors: {}
// };
export default (state = {}, action = {}) => {
  switch (action.type) {
    case USER_LOGGER_IN:
      return {
        user: action.user
      };
    default: return state;
  }
}
