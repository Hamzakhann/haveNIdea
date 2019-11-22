import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { registerUser , removeRegisterError , googleSignUp ,fbSignUp} from '../../Store/Actions/authActions';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Icon, Paper } from '@material-ui/core';
import { Link, withRouter, Redirect } from 'react-router-dom';
import registerValidator from '../../Validation/registerValidation';
import {auth} from '../../Config/firebaseConfig';
import logo from '../../Assets/logo.png';
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
const Register = (props) => {
    // HOOKS SECTION
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        c_password: '',
    });
    const [registerError, setregisterError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        c_password: '',
    });

    useEffect(() =>{
        console.log('register check' ,props.auth.user)
    })
    const onFormSubmit = () => {
        const userAfterValidate = registerValidator(userData)
        if (userAfterValidate.isValid) {
            props.registerUser(userData, props.history)
            setregisterError({ firstName: '', lastName: '', email: '', password: '', c_password: '' })
        } else {
            setregisterError({ ...registerError, ...userAfterValidate.errors })
        }
    }

    const classes = useStyles()
    if(props.auth.user) return <Redirect to='/profile' />
    return (
        <div className='container-fluid p-0'>
            {props.auth.error ? 
            <div style={{ position: 'fixed', top:'10px', left:'10px' }} class="alert alert-danger" role="alert">
               {props.auth.error} <Button onClick={() => props.removeRegisterError()} className='text-danger font-weight-bold' ><i class="fas fa-times"></i></Button> 
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
                        <h4>Register Account</h4>
                        <form className={classes.formContainer} autoComplete="off">
                            <div className='row' >
                                <div className='col-sm col-md-6' >
                                    <TextField
                                        name='firstName'
                                        type='text'
                                        label="First Name"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        value={userData.firstName}
                                        onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                                    />
                                    <small className='ml-2 text-danger' >{registerError.firstName ? registerError.firstName : ''}</small>
                                </div>
                                <div className='col-sm col-md-6' >
                                    <TextField
                                        name='lastName'
                                        type='text'
                                        label="Last Name"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        value={userData.lastName}
                                        onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                                    />
                                    <small className='ml-2 text-danger' >{registerError.lastName ? registerError.lastName : ''}</small>
                                </div>
                            </div>
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
                                    <small className='ml-2 text-danger' >{registerError.email ? registerError.email : ''}</small>
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-6' >
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
                                    <small className='ml-2 text-danger' >{registerError.password ? registerError.password : ''}</small>
                                </div>
                                <div className='col-sm col-md-6' >
                                    <TextField
                                        name='c_password'
                                        type='password'
                                        label="Confirmed Password"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        value={userData.c_password}
                                        onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                                    />
                                    <small className='ml-2 text-danger' >{registerError.c_password ? registerError.c_password : ''}</small>
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-12' >
                                    <Button onClick={() => onFormSubmit()} variant="outlined" disabled={props.auth.isLoading} color="primary" className={classes.button}>
                                        Register
                                     </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='text-center' >
                        <span className='or' >OR</span>
                    </div>
                    <div className='social-register-container pl-4 pr-4' >
                        <div className='row' >
                            <div className='col-sm col-md-6' >
                                <Button onClick={() => props.fbSignUp(props.history)} disabled={props.auth.isLoading} variant="outlined" color="primary" className={classes.button}>
                                    <Icon  style={{ color: '#4267B2' }} className="fab fa-facebook-square mr-2" />
                                    SignUp With Facebook
                                </Button>
                            </div>
                            <div className='col-sm col-md-6' >
                                <Button onClick={() => props.googleSignUp(props.history)} disabled={props.auth.isLoading} variant="outlined" color="primary" className={classes.button}>
                                    <Icon style={{ color: '#ff5500' }} className="fab fa-google mr-2" />
                                    SignUp With Google
                              </Button>
                            </div>
                        </div>
                    </div>
                    <div className='supported-text' >
                        <p>Already Have an Account ?
                          <Link className='ml-2 text-decoration-none' to='/login' >Login Here</Link>
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
export default connect(mapStateToProps, { registerUser , removeRegisterError , googleSignUp,fbSignUp})(withRouter(Register));