import {
    PROFILE_LOADING,
    PROFILE_NOT_COMPLETED,
    PROFILE_COMPLETED,
    PROFILE_ERROR
} from '../Constant/constant';

const initialState = {
    isLoading: false,
    error: '',
    profile: null,
    iscompleted: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PROFILE_LOADING:
            return { ...state, isLoading: true }
        case PROFILE_NOT_COMPLETED:
            return { ...state, isLoading: false, profile: action.payload.profile, iscompleted: false }
        case PROFILE_COMPLETED:
            return { ...state, isLoading: false, profile: action.payload.profile, iscompleted: true }
        case PROFILE_ERROR:
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state;
    }
};