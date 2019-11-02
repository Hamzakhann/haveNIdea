import React, { Component } from 'react';
import {auth} from '../../Config/firebaseConfig';
class Profile extends Component {
    render() {
       var user  = localStorage.getItem('user')
       console.log('proifle ka console je===',JSON.parse(user)) 
       return (
            <div>
                Hello Profile
            </div>
        );
    }
}

export default Profile;