import { Types } from "./actions";
import { getUser } from "../config/utils";

const initialState = {
  user: getUser(),
  data: [],
  loading: false,
  status: null,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    // login dispatch
    case Types.LOGIN_VALIDATION:
        return {
            ...state,
            loading: action.payload.loading,
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
    case Types.REGISTER_SUCCESSFUL:
        return {
            ...state,
            status: action.payload.data,
            loading: action.payload.loading,
            error: action.payload.error,
        };
    case Types.LOGOUT:
        return {
            ...state,
            user: null
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
            loading: action.payload.loading,
            error: action.payload.error,
        };
    case Types.FETCH_DATA_SUCCESSFUL:
        return {
            ...state,
            data: action.payload.data,
            loading: action.payload.loading,
            error: action.payload.error,
            status: action.payload.status
        };

    case Types.CLEAR_ERROR:
        return {
            ...state,
            error: null
        }
    case Types.CLEAR_DATA:
        return {
            ...state,
            data: null
        }
    case Types.CLEAR_STATUS:
        return {
            ...state,
            status: null
        }

    default:
      return state;
  }
}