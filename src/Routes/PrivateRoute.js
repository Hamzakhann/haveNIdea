import React , {useState} from 'react';
import {Route , Redirect} from 'react-router-dom';
import {auth} from '../Config/firebaseConfig';

const PrivateRoute =  ({component : Component , ...rest}) => {
        // HOOKS SECTION
        const [isAuthenticated, setAuth] = useState(false);

        auth.onAuthStateChanged((user) =>{
            if(user !== null){
                setAuth(true)
            }
        })
    return(
        <Route 
        {...rest}
        render = {props =>
        isAuthenticated === true ?(
          <Component  {...props} />
        ) :(
          <Redirect to = "/login" />
        )
        }
        />
    )
}




export default PrivateRoute;