import {
    REGISTER_USER_LOADING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR
} from '../Constant/constant';

const initialState = {
    isLoading:false,
    error:''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_LOADING:
            return {...state , isLoading:true}
        case REGISTER_USER_SUCCESS:
            return {...state , isLoading:false}
        case REGISTER_USER_ERROR:
            return {...state , isLoading:false, error:action.payload}
        default:
            return state;
    }
};