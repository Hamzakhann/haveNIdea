
import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Register from '../Screens/Register/Register';
import Login from '../Screens/Login/Login';
import EmailVerification from '../Screens/EmailVerification/EmailVerification';
const Routes = (props)=> {
  return (
    <Router>
        <div>
        <Route exact path = '/register' component = {Register} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/email-verification' component = {EmailVerification} />
        </div>
    </Router>
  );
};


export default Routes;