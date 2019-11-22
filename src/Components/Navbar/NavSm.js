import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ExploreOffIcon from '@material-ui/icons/ExploreOff';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import logo from '../../Assets/nav-logo.png';
import './nav.css';

const useStyles = makeStyles({
    navIcon: {
        color: '#F29898',
        fontWeight: 'bold',
        marginRight: '30px'
    },
    iconBtn: {
        backgroundColor: '#f298981a',
        marginLeft: '10px'
    },
    drawer: {
        width: '100%'
    },
    avatar: {
        width: 70,
        height: 70
    }
});

const NavSm = (props) => {
    const [isOpen, setDrawer] = useState(false)
    const classes = useStyles();
    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(!isOpen)
    };
    return (
        <>
            <Drawer open={isOpen} onClose={toggleDrawer(false)} className={classes.drawer} >
                <div className='profile-sm-container'>
                    <Avatar alt="Remy Sharp" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/1B7D/production/_106473070_0a73242e-3f72-4976-bbd2-3097d9e0b2b4.png" className={classes.avatar} />
                    <h6 className='font-weight-bold' >Hamza Khan</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class={`${classes.navIcon} list-group-item`} >
                        <HomeIcon className={classes.navIcon} />
                        Home
                    </li>
                    <li class={`${classes.navIcon} list-group-item`} >
                        <AccountCircleIcon className={classes.navIcon} />
                        Profile
                    </li>
                    <li class={`${classes.navIcon} list-group-item`} >
                        <WbIncandescentIcon className={classes.navIcon} />
                        My Ideas
                    </li>
                    <li class={`${classes.navIcon} list-group-item`} >
                        <ExploreOffIcon className={classes.navIcon} />
                        Explore
                        </li>
                    <li class={`${classes.navIcon} list-group-item`} >
                        <GroupWorkIcon className={classes.navIcon} />
                        Start-Up
                    </li>
                    <li class={`${classes.navIcon} list-group-item`} >
                        <ExitToAppIcon className={classes.navIcon} />
                        Logout
                    </li>
                </ul>
            </Drawer>
            <ul class="nav-sm p-0">
                <li>

                    <IconButton onClick={toggleDrawer(true)} className={classes.iconBtn}>
                        <MenuIcon className={`${classes.navIcon} d-block d-md-none`} />
                    </IconButton>
                </li>
                <li>
                    <img src={logo} className='img img-fluid' />
                </li>
            </ul>


        </>
    );
}

export default NavSm;