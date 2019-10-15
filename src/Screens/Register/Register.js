import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Fab } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import logo from '../../Assets/logo.png';
import './register.css';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        padding: '35px'
    },
    textField: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(3),
        width: '100%'
    },
}));
const Register = (props) => {
    const classes = useStyles()
    return (
        <div className='container-fluid p-0'>
            <div className='register-main-container' >


                <div className='register-form-container' >
                    <div className='logo-container' >
                        <img src={logo} className='img img-fluid' />
                        <div>
                            <h4>JOIN HUB OF IDEAS</h4>
                            <small>
                                Build your team and transform the IDEA into START-UP
                            </small>
                        </div>
                    </div>
                    <hr style={{ width: '90%' }} />
                    <div className='register-form' >
                        <h4>Sign Up</h4>
                        <form className={classes.container} autoComplete="off">
                            <div className='row' >
                                <div className='col-sm col-md-6' >
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        className={classes.textField}
                                        value='Name'
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-sm col-md-6' >
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        className={classes.textField}
                                        value='Name'
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-12' >
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        className={classes.textField}
                                        value='Name'
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-6' >
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        className={classes.textField}
                                        value='Name'
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-sm col-md-6' >
                                    <TextField
                                        id="outlined-name"
                                        label="Name"
                                        className={classes.textField}
                                        value='Name'
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-12' >
                                    <Button variant="outlined" color="primary" className={classes.button}>
                                        Register
                                </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='social-register-container' >
                        <Button variant="outlined" color="primary" className={classes.button}>
                            <NavigationIcon className={classes.extendedIcon} />
                            Login With Facebook
        </Button>
                        <Button variant="outlined" color="primary" className={classes.button}>
                            <NavigationIcon className={classes.extendedIcon} />
                            Login With Google
        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;