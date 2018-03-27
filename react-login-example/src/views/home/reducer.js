const USER_LOGGER_OUT = "USER_LOGGER_OUT";

export default (state = {}, action = {}) => {
    switch (action.type) {
      case USER_LOGGER_OUT:
        return action.payload.state;
      default: return state;
    }
  }