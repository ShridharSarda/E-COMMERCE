import { 
  GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  LOGOUT
} from './ActionType';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, error: null, jwt: action.payload };

    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, user: action.payload };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
}
