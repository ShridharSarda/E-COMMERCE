import { GET_USER_REQUEST, LOGIN_REQUEST, REGISTER_REQUEST } from './actions';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        jwt: action.payload.jwt,
        error: null
      };
    
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        jwt: action.payload.jwt,
        error: null
      };
    
    default:
      return state;
  }
};