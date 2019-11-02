import {
    REGISTER_USER_LOADING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REMOVE_REGISTER_USER_ERROR,
    LOGIN_USER_LOADING,
    LOGIN_USER_ERROR,
    REMOVE_LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS
} from '../Constant/constant';
import { auth, db , googleAuthProvider , fbAuthProvider} from '../../Config/firebaseConfig';


//Register user 
export const registerUser = (userData, history) => dispatch => {
    dispatch({ type: REGISTER_USER_LOADING })
    auth.createUserWithEmailAndPassword(userData.email, userData.password)
        .then((currentUser) => {
            currentUser.user.sendEmailVerification();
            currentUser.user.updateProfile({
                displayName: `${userData.firstName} ${userData.lastName}`
            }).then(() => {
                dispatch({ type: REGISTER_USER_SUCCESS })
                history.push(`/email-verification`)
            })
        })
        .catch((err) => {
            dispatch({ type: REGISTER_USER_ERROR, payload: err.message })
        })
};

export const removeRegisterError = () => dispatch => {

    dispatch({ type: REMOVE_REGISTER_USER_ERROR })
}

export const googleSignUp  = (history) => dispatch => {
    dispatch({ type: REGISTER_USER_LOADING })
    auth.signInWithPopup(googleAuthProvider)
    .then((currentUser) => {
        if(!currentUser.additionalUserInfo.isNewUser){
            dispatch({ type: REGISTER_USER_ERROR, payload: 'User Already Exist' })
        }else{
            dispatch({ type: REGISTER_USER_SUCCESS })
            history.push(`/login`)  
        }
    })
    .catch((err) => {
        dispatch({ type: REGISTER_USER_ERROR, payload: err.message })
    })
}

export const fbSignUp  = (history) => dispatch => {
    dispatch({ type: REGISTER_USER_LOADING })
    auth.signInWithPopup(fbAuthProvider)
    .then((currentUser) => {
        if(!currentUser.additionalUserInfo.isNewUser){
            dispatch({ type: REGISTER_USER_ERROR, payload: 'User Already Exist' })
        }else{
            dispatch({ type: REGISTER_USER_SUCCESS })
            history.push(`/login`)  
        }
    })
    .catch((err) => {
        dispatch({ type: REGISTER_USER_ERROR, payload: err.message })
    })
}


// LOGIN USER FLOW
export const loginUser = (userData , history) => dispatch =>{
    dispatch({ type: LOGIN_USER_LOADING })
    auth.signInWithEmailAndPassword(userData.email,userData.password)
    .then((loginUser) =>{
        if(loginUser.user.emailVerified){
            window.localStorage.setItem('user' , JSON.stringify(loginUser.user))
            dispatch({ type: LOGIN_USER_SUCCESS })
            history.push('/profile')
        }else{
            auth.signOut();
            dispatch({ type: LOGIN_USER_ERROR, payload: 'Verify your email first' })    
        }
    })
    .catch((err) => {
        dispatch({ type: LOGIN_USER_ERROR, payload: err.message })
    })
}

export const removeLoginError = () => dispatch => {

    dispatch({ type: REMOVE_LOGIN_USER_ERROR })
}


export const googleLogin = (history) => dispatch =>{
    dispatch({ type: LOGIN_USER_LOADING })
    auth.signInWithPopup(googleAuthProvider)
    .then((loginUser) =>{
        if(!loginUser.additionalUserInfo.isNewUser){
            window.localStorage.setItem('user' , JSON.stringify(loginUser.user))
            dispatch({ type: LOGIN_USER_SUCCESS })
            history.push(`/profile`)
        }else{
            console.log('check google dev',loginUser)
                loginUser.user.delete().then(()=>{
                dispatch({ type: LOGIN_USER_ERROR, payload: 'User Not Found' })
            })
        }
    })
    .catch((err) => {
        dispatch({ type: LOGIN_USER_ERROR, payload: err.message })
    })
}

export const fbLogin = (history) => dispatch =>{
    dispatch({ type: LOGIN_USER_LOADING })
    auth.signInWithPopup(fbAuthProvider)
    .then((loginUser) =>{
        if(!loginUser.additionalUserInfo.isNewUser){
            window.localStorage.setItem('user' , JSON.stringify(loginUser.user))
            dispatch({ type: LOGIN_USER_SUCCESS })
            history.push(`/profile`)
        }else{
            console.log('check google dev',loginUser)
                loginUser.user.delete().then(()=>{
                dispatch({ type: LOGIN_USER_ERROR, payload: 'User Not Found' })
            })
        }
    })
    .catch((err) => {
        dispatch({ type: LOGIN_USER_ERROR, payload: err.message })
    })
}