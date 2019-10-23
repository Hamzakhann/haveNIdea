    import React from 'react';
    import { Button } from '@material-ui/core';
    import { Link } from 'react-router-dom';
    import '../auth.css';
    import logo from '../../Assets/logo.png'
    const EmailVerification = (props) => {
        return (
            <div className='container'>
                <img src={logo} className='img img-fluid' />
                <div className='e-verification-container' >
                    <div className='email-tick'>
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h1 className='text-center' >Verify Yourself</h1>
                    <h4 className='text-center' >HaveAnIdea Sent you a Verification Email</h4>
                    <p className='text-center' >Please verify yourself before login</p>
                    <div class="arrow bounce" id='story'>
                            <a class="fa fa-arrow-down fa-2x" href="#"></a>
                    </div>
                    <Button size='large' variant="outlined">
                        <Link  className='text-decoration-none ' to='/login' >Login</Link>
                    </Button>
                </div>
            </div>
        );
    };






    export default EmailVerification