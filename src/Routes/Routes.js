
import React , {useState , useEffect} from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Register from '../Screens/Register/Register';
import Login from '../Screens/Login/Login';
import Profile from '../Screens/Profile/Profile';
import EmailVerification from '../Screens/EmailVerification/EmailVerification';
import ProfileEdit from '../Components/ProfileEdit/ProfileEdit';
import PrivateRoute from './PrivateRoute';
import Navbar from '../Components/Navbar/Navbar';
const Routes = (props)=> {
      // HOOKS SECTION
      const [nav, setNav] = useState(false);
      useEffect(()=>{

        if(localStorage.getItem('user') !==null){
        setNav(true)
        }
      })
  return (
    <Router>
      <div style={{display:nav ? 'block':'none'}}>
      <Navbar />
      </div>
        <div>
        <Route exact path = '/register' component = {Register} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/email-verification' component = {EmailVerification} />
        <Switch>
            <PrivateRoute exact path = '/profile' component = {Profile} />
            <PrivateRoute exact path = '/profile/edit' component = {ProfileEdit} />
        </Switch>
        </div>
    </Router>
  );
};


export default Routes;