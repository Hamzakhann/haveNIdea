import {
    GET_PROFILE_LOADING,
    GET_PROFILE_COMPLETED,
    GET_PROFILE_UNCOMPLETED,
    GET_PROFILE_ERROR,
    UPDATE_PROFILE_LOADING,
    UPDATE_PROFILE_COMPLETED,
    UPDATE_PROFILE_ERROR,
    REMOVE_PROFILE_ERROR
} from '../Constant/constant';

const initialState = {
    isLoading: false,
    error: '',
    profile: {},
    profileUpdated: false,
    profileLoading: false,
    profileError: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_LOADING:
            return { ...state, isLoading: true }
        case GET_PROFILE_UNCOMPLETED:
            return { ...state, isLoading: false, profile: action.payload }
        case GET_PROFILE_COMPLETED: return {
            ...state,
            isLoading: false,
            profile: { ...action.payload },
        }
        case GET_PROFILE_ERROR:
            return { ...state, isLoading: false, error: action.payload }
        case UPDATE_PROFILE_LOADING:
            return { ...state, profileLoading: true }
        case UPDATE_PROFILE_COMPLETED:
            return { ...state, profileLoading: false, profileUpdated: true }
        case UPDATE_PROFILE_ERROR:
            return { ...state, profileLoading: false, profileError: action.payload }
        case REMOVE_PROFILE_ERROR:
            return { ...state, profileLoading: false, profileError: "" }
        default:
            return state;
    }
};