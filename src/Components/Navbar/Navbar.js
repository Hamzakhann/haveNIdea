import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../Assets/logo.png'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import './nav.css'
const useStyles = makeStyles({

    bigAvatar: {
        position: 'absolute',
        left: 3,
        top: 4,
        width: 120,
        height: 140,
    },
});
export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <AppBar style={{ background: '#e5c8a0', height: '60px' }} position="static">
            <div className='nav-container' >
                <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
                <div></div>
                <div className='nav-item-container' >
                    <ul class="list-inline">
                        <Link to='/' >
                            <Button
                                color="primary"
                                startIcon={<HomeIcon />}
                            >

                                Home
                        </Button>
                        </Link>
                        <Link to='/' >
                            <Button
                                color="primary"
                                startIcon={<DonutSmallIcon />}
                            >

                                Start-Ups
                        </Button>
                        </Link>
                        <Link to='/' >
                            <Button
                                color="primary"
                                startIcon={<RecordVoiceOverIcon />}
                            >

                                My-Ideas
                        </Button>

                        </Link>
                        <Link to='/' >
                            <Button
                                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                color="primary"
                                startIcon={<FaceIcon />}
                            >
                                 Profile                               <ArrowDropDownIcon/> 
                        </Button>

                        </Link>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >

                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </ul>
                </div>

            </div>


        </AppBar>
    );
}