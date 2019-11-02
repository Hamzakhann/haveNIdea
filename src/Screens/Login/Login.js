import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Icon, Paper } from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser ,removeLoginError,googleLogin,fbLogin } from '../../Store/Actions/authActions';
import logo from '../../Assets/logo.png';
import loginValidation from '../../Validation/loginValidation';
import {auth} from '../../Config/firebaseConfig';
import '../auth.css';

const useStyles = makeStyles(theme => ({
    formContainer: {
        width: '100%',
        padding: '15px'
    },
    textField: {
        width: '100%',
        "& label.Mui-focused": {
            color: "#F29898",
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#F29898',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#4C96D7',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F29898',
            },
        },
    },
    button: {
        marginTop: theme.spacing(3),
        width: '100%',
        border: '1px solid #F0999C',
        color: '#F0999C',
        '&:hover': {
            border: '1px solid #4A97D2',
            color: '#4A97D2',
        }
    },
}));
const Login = (props) => {
    // HOOKS SECTION
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [loginError, setLoginError] = useState({
        email: '',
        password: ''
    });


    const onFormSubmit = () => {
        const userAfterValidate = loginValidation(userData)
        if (userAfterValidate.isValid) {
            props.loginUser(userData, props.history)
            setLoginError({email: '', password: ''})
        } else {
            setLoginError({ ...loginError, ...userAfterValidate.errors })
        }
    }
    const classes = useStyles()
    console.log('login me user ', auth.currentUser)
    return (
        <div className='container-fluid p-0'>
             {props.auth.error ? 
            <div style={{ position: 'fixed', top:'10px', left:'10px' }} class="alert alert-danger" role="alert">
               {props.auth.error} <Button onClick={() => props.removeLoginError()} className='text-danger font-weight-bold' ><i class="fas fa-times"></i></Button> 
            </div>: ""}
            <div className='register-main-container' >
                <Paper className='register-form-container' >
                    <div className='logo-container' >
                        <img src={logo} className='img img-fluid' />
                        <div>
                            <h4>JOIN HUB OF IDEAS</h4>
                            <small>
                                Build your team and transform the IDEA into START-UP
                            </small>
                        </div>
                    </div>
                    <div className='register-form' >
                        <h4>Login</h4>
                        <form className={classes.formContainer} autoComplete="off">
                            <div className='row' >
                                <div className='col-sm col-md-12' >
                                    <TextField
                                        name='email'
                                        type='email'
                                        label="Email"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        value={userData.email}
                                        onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                                    />
                                <small className='ml-2 text-danger' >{loginError.email ? loginError.email : ''}</small>
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-12' >
                                    <TextField
                                      name='password'
                                      type='password'
                                      label="Password"
                                      className={classes.textField}
                                      margin="normal"
                                      variant="outlined"
                                      value={userData.password}
                                      onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                                    />
                                    <small className='ml-2 text-danger' >{loginError.password ? loginError.password : ''}</small>
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-12' >
                                    <Button onClick={() => onFormSubmit()} variant="outlined" color="primary" disabled={props.auth.isLoading} className={classes.button}>
                                        Login
                                     </Button>
                                </div>
                            </div>
                        </form>
                        <div className='supported-text' >

                            <p>Forgot your Password ?
                          <a href='#' >Click Here</a>
                            </p>
                        </div>
                    </div>
                    <div className='text-center' >
                        <h5 className='or' >OR</h5>
                    </div>
                    <div className='social-register-container pl-4 pr-4' >
                        <div className='row' >
                            <div className='col-sm col-md-6' >
                                <Button onClick={() => props.fbLogin(props.history)} variant="outlined" color="primary" disabled={props.auth.isLoading} className={classes.button}>
                                    <Icon style={{ color: '#4267B2' }} className="fab fa-facebook-square mr-2" />
                                    Login With Facebook
                                </Button>
                            </div>
                            <div className='col-sm col-md-6' >
                                <Button onClick={() => props.googleLogin(props.history)} variant="outlined" color="primary" disabled={props.auth.isLoading} className={classes.button}>
                                    <Icon style={{ color: '#ff5500' }} className="fab fa-google mr-2" />
                                    Login With Google
                              </Button>
                            </div>
                        </div>
                    </div>
                    <div className='supported-text' >
                        <p>Don't Have an Account ?
                        <Link className='ml-2 text-decoration-none' to='/register' >Register Here</Link>
                        </p>
                    </div>
                </Paper >
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    auth: state.authReducer,
})
export default connect(mapStateToProps, { loginUser , removeLoginError, googleLogin,fbLogin})(withRouter(Login));