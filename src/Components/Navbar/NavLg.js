import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../Assets/nav-logo.png';
import './nav.css';


const useStyles = makeStyles({
    btn: {
        color: '#F29898',
        fontWeight: 'bold',
    },
    navIcon:{
        color: '#F29898',
        fontWeight: 'bold',
    }
});

function NavLg(props) {
    const classes = useStyles();
    return (
        <div className='d-flex align-items-center justify-content-center'>
        <ul class="d-flex align-items-center justify-content-center">
            <li>
                <Button className={`${classes.btn}`} >
                    Home
                </Button>
            </li>
            <li>
            <Button className={`${classes.btn}`}>
                    Profile
            
             </Button>
             </li>
            <li>
                <Button className={`${classes.btn}`}>
                    My Ideas
                 </Button>
            </li>
        </ul>
        <div>
          <img src={logo} className='img img-fluid' />  
        </div>
        <ul class="d-flex align-items-center justify-content-center">
            <li >
                <Button className={`${classes.btn}`}>
                    Explore
                 </Button>

            </li>
            <li >
                <Button className={`${classes.btn}`}>
                    START-UPS
                 </Button>
                 
            </li>
            <li >
                <Button className={`${classes.btn}`}>
                    Logout
                 </Button>
            </li>
        </ul>
    </div>
    );
}

export default NavLg;