import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button,Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import './p-edit.css'

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
    selectField: {
        width: '100%',
        marginTop: '15px',
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
    selectLabel: {
        backgroundColor: 'white',
        paddingLeft: '5px',
        paddingRight: '5px'
    }
}));
function ProfileEdit(props) {
    const classes = useStyles()
    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='alert-danger p-2 rounded'>
                    <h6>Complete Your Profile to access all features of HaveNIdea</h6>
                </div>
            </div>
            <div className='profile-edit-container p-4' >
                <div className='row' >
                    <div className='col-sm col-md-6' >
                        <TextField
                            name='firstName'
                            type='text'
                            label="First Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        // value={userData.firstName}
                        // onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className='col-sm col-md-6' >
                        <TextField
                            name='lastName'
                            type='text'
                            label="Last Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        // value={userData.firstName}
                        // onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                        />
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm col-md-6' >
                        <TextField
                            name='email'
                            type='text'
                            label="Email"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        // value={userData.firstName}
                        // onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className='col-sm col-md-6' >
                        <TextField
                            name='city'
                            type='text'
                            label="City"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        // value={userData.firstName}
                        // onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                        />
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm col-md-6' >
                        <FormControl variant="outlined" className={classes.selectField}>
                            <InputLabel className={classes.selectLabel} id="country">
                                Country
                             </InputLabel>
                            <Select
                                id="country"
                            //   value={age}
                            //   onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='col-sm col-md-6' >
                        <FormControl variant="outlined" className={classes.selectField}>
                            <InputLabel className={classes.selectLabel} id="role">
                                Role
                             </InputLabel>
                            <Select
                                id="role"
                            //   value={age}
                            //   onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm col-md-6' >
                        <FormControl variant="outlined" className={classes.selectField}>
                            <InputLabel className={classes.selectLabel} id="exp">
                                Working Experience
                             </InputLabel>
                            <Select
                                id="exp"
                            //   value={age}
                            //   onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='col-sm col-md-6' >
                        <FormControl variant="outlined" className={classes.selectField}>
                            <InputLabel className={classes.selectLabel} id="gender">
                                Gender
                             </InputLabel>
                            <Select
                                id="gender"
                            //   value={age}
                            //   onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm col-md-6' >
                        <TextField
                            name='twitter'
                            type='text'
                            label="Twitter Account"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        // value={userData.firstName}
                        // onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className='col-sm col-md-6' >
                        <TextField
                            name='linkedin'
                            type='text'
                            label="LinkedIn Account"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        // value={userData.firstName}
                        // onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
                        />
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm-12' >
                        <TextField
                            label="About Yourself"
                            multiline
                            rows="5"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                </div>
                <div className='row mt-3' >
                    <div className='col-sm col-md-6' >
                        <DropzoneArea
                            dropzoneText={'Upload Profile Picture'}
                            acceptedFiles={['image/*']}
                            filesLimit={1}
                        />
                    </div>
                    <div className='col-sm col-md-6' >
                        <DropzoneArea
                            dropzoneText={'Upload Cover Image'}
                            acceptedFiles={['image/*']}
                            filesLimit={1}
                        />
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm col-md-12' >
                        <Button  variant="outlined"  color="primary" className={classes.button}>
                        Update Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileEdit;