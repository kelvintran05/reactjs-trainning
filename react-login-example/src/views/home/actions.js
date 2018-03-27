export const USER_LOGGER_OUT = "USER_LOGGER_OUT";
export const logout = () => {
    return {
        type: USER_LOGGER_OUT,
        payload: {
            state: {
                data: {
                    email: '',
                    password: ''
                },
                isAuthenticated: false,
                errors: {}
            }
        }
    }
}