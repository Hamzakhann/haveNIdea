import React from 'react';
import { logoutUser } from '../../Store/Actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import ProfileComplete from '../../Components/ProfileComplete/ProfileComplete';
const Profile = (props) => {

    if (props.profile.isLoading) {
        return <Spinner />
    } else if (!props.profile.iscompleted && !props.profile.isLoading) {
        props.history.push('/profile/edit')
    }
    return (
        <ProfileComplete />
    )
}

const mapStateToProps = (state) => ({
    profile: state.profileReducer
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Profile));