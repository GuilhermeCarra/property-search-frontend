import axios from "axios";

const Types = {
    LOGIN_VALIDATION: "LOGIN_VALIDATION",
    LOGIN_ERROR: "LOGIN_ERROR",
    LOGIN_SUCCESSFUL: "LOGIN_SUCCESSFUL",
    FETCH_DATA_STARTED: "FETCH_DATA_STARTED",
    FETCH_DATA_ERROR: "FETCH_DATA_ERROR",
    FETCH_DATA_SUCCESSFUL: "FETCH_DATA_SUCCESSFUL"
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

const loginValidate = () => {
    return async function (dispatch) {
        dispatch(loginValidationStarted());

        return axios
            .get("TBD")
            .then((response) => {
                const { data } = response;
                dispatch(loginSuccessful(data));
            })
            .catch((error) => {
                dispatch(loginError(error));
            });
    };
};

export { fetchInit, loginValidate, Types };