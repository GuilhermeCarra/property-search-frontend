import axios from "axios";

const Types = {
    LOGIN_VALIDATION: "LOGIN_VALIDATION",
    LOGIN_ERROR: "LOGIN_ERROR",
    LOGIN_SUCCESSFUL: "LOGIN_SUCCESSFUL",
    FETCH_DATA_STARTED: "FETCH_DATA_STARTED",
    FETCH_DATA_ERROR: "FETCH_DATA_ERROR",
    FETCH_DATA_SUCCESSFUL: "FETCH_DATA_SUCCESSFUL",
    CLEAR_ERROR: "CLEAR_ERROR"
};

// successful ✅
const fetchSuccessful = (users) => ({
    type: Types.FETCH_DATA_SUCCESSFUL,
    payload: {
        users,
        loading: false,
    },
});

// error ❌
const fetchError = () => ({
    type: Types.FETCH_DATA_ERROR,
    payload: {
        loading: false,
    },
});

// loading ⌛
const fetchStarted = () => ({
    type: Types.FETCH_DATA_STARTED,
    payload: {
        loading: true,
    },
});

const fetchInit = (endpoint) => {
    return async function (dispatch) {
      dispatch(fetchStarted());

      return axios(endpoint.url, endpoint.config)
        .then((response) => {
          const { data } = response;
          dispatch(fetchSuccessful(data));
        })
        .catch((error) => {
          dispatch(fetchError(error));
        });
    };
};

// successful ✅
const loginSuccessful = (data) => ({
    type: Types.LOGIN_SUCCESSFUL,
    payload: {
        user: data.data,
        loading: false,
        error: false
    },
});

// error ❌
  const loginError = (data) => ({
    type: Types.LOGIN_ERROR,
    payload: {
        loading: false,
        error: data.error
    },
});

// loading ⌛
  const loginValidationStarted = () => ({
    type: Types.LOGIN_VALIDATION,
    payload: {
        loading: true,
        error: false
    },
});

// loading ⌛
  const clearError = () => ({
    type: Types.CLEAR_ERROR
});

const loginValidate = (options) => {
    return async function (dispatch) {
        dispatch(loginValidationStarted());

        return axios(options)
            .then((response) => {
                const { data } = response;
                dispatch(loginSuccessful(data));
            })
            .catch((error) => {
                dispatch(loginError(error.response.data));
                setTimeout(() => dispatch(clearError()),6000);
            });
    };
};

export { fetchInit, loginValidate, Types };