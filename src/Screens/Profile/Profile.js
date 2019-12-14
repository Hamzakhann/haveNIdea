import React, {Component} from 'react';
import {Button} from '@material-ui/core'
import { logoutUser } from '../../Store/Actions/authActions';
import {getProfile} from '../../Store/Actions/profileActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import ProfileComplete from '../../Components/ProfileComplete/ProfileComplete';
import ProfileEdit from '../../Components/ProfileEdit/ProfileEdit';
class Profile extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('profile ka console chal gya')
        let {user} = this.props.auth
        this.props.getProfile(user.uid)
    }
    render(){
        const {profileData} = this.props
        let profileContent;
        if (profileData.isLoading) {
            profileContent  =  (
                <div style={{ maxWidth: "90%", margin: "0 auto" }} >
                    <br/>
                    <br/>
                    <br/>
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                    <br/>
                    <br/>
                    <br/>
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                    <br/>
                    <br/>
                    <br/>
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
                <Skeleton variant="rect" />
            </div>
            )
        } else if (!profileData.profile.iscompleted && !profileData.isLoading) { 
            profileContent = <div
            style={{
                width:'100%', 
                display:'flex' , 
                justifyContent:'center',
                alignItems:'center',
                marginTop:'20%'
                }} >
                <Button  onClick={()=>this.props.history.push('/profile/edit')} color="secondary" variant="outlined" >Update Your Profile</Button>
            </div>
        }else{
            profileContent = <ProfileComplete />
        }
        return(
            <>
            {profileContent}
            </>
        )
    }    
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    profileData: state.profileReducer
})

export default connect(mapStateToProps, { logoutUser ,getProfile})(withRouter(Profile));