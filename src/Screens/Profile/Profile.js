import React, {Component} from 'react';
import { logoutUser } from '../../Store/Actions/authActions';
import {getProfile} from '../../Store/Actions/profileActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import ProfileComplete from '../../Components/ProfileComplete/ProfileComplete';
class Profile extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('profile ka console')
        let {user} = this.props.auth
        this.props.getProfile(user.uid)
    }
    render(){
        const {profileData} = this.props
        console.log(profileData.profile.iscompleted)
        let profileContemt;
        if (profileData.isLoading) {
            profileContemt  =  <Spinner />
        } else if (!profileData.profile.iscompleted && !profileData.isLoading) {
            this.props.history.push('/profile/edit')
        }else{
            profileContemt = <ProfileComplete />
        }    
        return(
            <>
            {profileContemt}
            </>
        )
    }    
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    profileData: state.profileReducer
})

export default connect(mapStateToProps, { logoutUser ,getProfile})(withRouter(Profile));