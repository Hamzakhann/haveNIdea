import {
    REGISTER_USER_LOADING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REMOVE_REGISTER_USER_ERROR,
    LOGIN_USER_LOADING,
    LOGIN_USER_ERROR,
    REMOVE_LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER
} from '../Constant/constant';

const initialState = {
    isLoading: false,
    error: '',
    user:null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_LOADING:
            return { ...state, isLoading: true }
        case REGISTER_USER_SUCCESS:
            return { ...state, isLoading: false,}
        case REGISTER_USER_ERROR:
            return { ...state, error: action.payload }
        case REMOVE_REGISTER_USER_ERROR:
            return { ...state, isLoading: false, error: '' }
        case LOGIN_USER_LOADING:
            return { ...state, isLoading: true }
        case LOGIN_USER_SUCCESS:
            return { ...state, isLoading: false , error:'', user:action.payload }
        case LOGIN_USER_ERROR:
            return { ...state, error: action.payload }
        case REMOVE_LOGIN_USER_ERROR:
            return { ...state, isLoading: false, error: '' }
        case LOGOUT_USER:
                return { ...state, isLoading: false, error: '', user:null }
        default:
            return state;
    }
};