import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Fab , Icon ,Paper  } from '@material-ui/core';
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
        border:'1px solid #F0999C',
        color:'#F0999C',
        '&:hover':{
            border:'1px solid #4A97D2',
            color:'#4A97D2',
        }
    },
}));
const Register = (props) => {
    const classes = useStyles()
    return (
        <div className='container-fluid p-0'>
            <div className='register-main-container' >
                <Paper  className='register-form-container' >
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
                                    type='text'
                                        label="First Name"
                                        className={classes.textField}
                                        value=''
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-sm col-md-6' >
                                    <TextField
                                    type='text'
                                        label="Last Name"
                                        className={classes.textField}
                                        value=''
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-12' >
                                    <TextField
                                    type='email'
                                        label="Email"
                                        className={classes.textField}
                                        value=''
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                            <div className='row' >
                                <div className='col-sm col-md-6' >
                                    <TextField
                                    type='password'
                                        label="Password"
                                        className={classes.textField}
                                        value=''
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>
                                <div className='col-sm col-md-6' >
                                    <TextField 
                                        type='password'
                                        label="Confirmed Password"
                                        className={classes.textField}
                                        value=''
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
                    <div className='text-center' >
                        <h5 className='or' >OR</h5>
                    </div>
                    <div className='social-register-container pl-4 pr-4' >
                        <div className='row' >
                            <div className='col-sm col-md-6' >
                                <Button variant="outlined" color="primary" className={classes.button}>
                                <Icon style={{color:'#4267B2'}} className="fab fa-facebook-square mr-2" />
                                    SignUp With Facebook
                                </Button>
                            </div>
                            <div className='col-sm col-md-6' >
                                <Button variant="outlined" color="primary" className={classes.button}>
                                <Icon style={{color:'#ff5500'}} className="fab fa-google mr-2"/>
                                    SignUp With Google
                              </Button>
                            </div>
                        </div>
                    </div>
                    <div className='supported-text' >
                        <p>Already Have an Account ? 
                          <a href='#' >Login Here</a>  
                         </p>
                    </div>
                </Paper >
            </div>
        </div>
    );
};

export default Register;