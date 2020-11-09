import { Types } from "./actions";
import { getToken } from "../config/utils";

const initialState = {
  user: getToken(),
  data: null,
  loading: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    // login dispatch
    case Types.LOGIN_VALIDATION:
        return {
            ...state,
            loading: action.payload.users,
            error: action.payload.error,
        };
    case Types.LOGIN_ERROR:
        return {
            ...state,
            loading: action.payload.loading,
            error: action.payload.error
        };
    case Types.LOGIN_SUCCESSFUL:
        return {
            ...state,
            user: action.payload.user,
            loading: action.payload.loading,
            error: action.payload.error,
        };

    // fetch data dispatch
    case Types.FETCH_DATA_ERROR:
        return {
            ...state,
            loading: action.payload.loading,
            error: action.payload.error
        };
    case Types.FETCH_DATA_STARTED:
        return {
            ...state,
            user: action.payload.user,
            loading: action.payload.loading,
            error: action.payload.error,
        };
    case Types.FETCH_DATA_SUCCESSFUL:
        return {
            ...state,
            data: action.payload.data,
            loading: action.payload.users,
            error: action.payload.error,
        };

    default:
      return state;
  }
}