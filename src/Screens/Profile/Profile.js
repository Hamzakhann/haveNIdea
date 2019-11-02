import React, { Component } from 'react';
import {auth} from '../../Config/firebaseConfig';
import { logoutUser} from '../../Store/Actions/authActions';
import {connect} from 'react-redux';
class Profile extends Component {
    render() {
       var user  = localStorage.getItem('user')
       console.log('proifle ka console je===',this.props.loginUser.user) 
       return (
            <div>
                <button onClick={() => this.props.logoutUser()} >Logout</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    loginUser: state.authReducer,
})
export default connect(mapStateToProps , {logoutUser})(Profile);