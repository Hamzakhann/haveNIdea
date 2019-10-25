import {
    REGISTER_USER_LOADING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR
} from '../Constant/constant';
import {auth , db} from '../../Config/firebaseConfig';


//Register user 
export const registerUser = (userData , history) => dispatch =>{
    // console.log( 'Action ka conosle' , userData , 'history ',history)
    dispatch({type:REGISTER_USER_LOADING})
    auth.createUserWithEmailAndPassword(userData.email,userData.password)
    .then((currentUser)=>{
        currentUser.user.sendEmailVerification();
        dispatch({type:REGISTER_USER_SUCCESS})
        history.push(`/email-verification`)
    }).catch((err) =>{
        dispatch({type:REGISTER_USER_ERROR , payload:err.message})
    })
};



// //Login user GET user token

// export const loginUser = (userData) => dispatch =>{
//   axios.post('/api/users/login' , userData)
//   .then(res => {
//     //save to local storage
//     const {token} = res.data
//     //set token to ls
//     localStorage.setItem('jwtToken' , token);
//     //set token to auth header
//     setAuthToken(token)
//     //decode token to get user data
//     const decoded = jwt_decode(token);
//     //set current user
//     dispatch(setCurrentUser(decoded))
//   }).catch(err => {
//     dispatch({
//       type : GET_ERRORS,
//       payload : err.response.data
//     })
//   });
// };

// //set logged in user
// export const setCurrentUser = (decoded) =>{
//   return {
//     type : SET_CURRENT_USER,
//     payload : decoded
//   }
// }


// //log user out 
// export const logoutUser = () => dispatch =>{
//   //remove token from local storage
//   localStorage.removeItem('jwtToken');
//   //remove auth header for future request
//   setAuthToken(false)
//   //set current user to this {} which will set isAuthenticated to flase
//   dispatch(setCurrentUser({}))
// }