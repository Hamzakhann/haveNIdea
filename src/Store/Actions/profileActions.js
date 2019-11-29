import {
    GET_PROFILE_LOADING,
    GET_PROFILE_COMPLETED,
    GET_PROFILE_UNCOMPLETED,
    GET_PROFILE_ERROR,
    UPDATE_PROFILE_LOADING,
    UPDATE_PROFILE_COMPLETED,
    UPDATE_PROFILE_ERROR
} from '../Constant/constant';
import {db,storage} from '../../Config/firebaseConfig';


export const setProfile = (data) => async dispatch => {
    dispatch({ type: UPDATE_PROFILE_LOADING})
    let userProfile = storage.child('userProfile');
    try{
        let profileImage = userProfile.child(`${data.user}-profile-image`);
        let profile = await profileImage.put(data.profileImage[0])
        let profileUrl = await profile.ref.getDownloadURL()
        let coverImage    = userProfile.child(`${data.user}-cover-image`)
        let cover = await coverImage.put(data.coverImage[0])
        let coverUrl = await cover.ref.getDownloadURL()
        let profileData = {...data, profileImage:profileUrl, coverImage:coverUrl, iscompleted:true}
        let userRef = db.collection('users').doc(profileData.user)
        let profileAfterUpdate = await userRef.update(profileData)
        dispatch({type:UPDATE_PROFILE_COMPLETED})
    }catch(e){
        dispatch({type:UPDATE_PROFILE_ERROR, payload:e})
    }
}

export const getProfile = (userId) => async dispatch =>{
    dispatch({ type: GET_PROFILE_LOADING})
    let userRef = db.collection('users').doc(userId)
    try{
        let response = await userRef.get()
        if(response.exists){
            const profile = response.data()
            if(profile.isCompleted){
                console.log(profile)
                dispatch({type:GET_PROFILE_COMPLETED,payload:profile})            
            }else{
                console.log(profile)
                dispatch({type:GET_PROFILE_UNCOMPLETED,payload:profile})
            }
        }
    }catch(e){
        dispatch({type:GET_PROFILE_ERROR, payload:e})   
    }
}


