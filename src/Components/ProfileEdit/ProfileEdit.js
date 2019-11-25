import React, { useState, useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import ChipInput from 'material-ui-chip-input'
import profileValidator from '../../Validation/profileValidation';
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

const ProfileEdit = (props) => {
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        country: '',
        role: '',
        experience: '',
        gender: '',
        twitter: '',
        linkedin: '',
        skills:[],
        about: '',
        profileImage: '',
        coverImage: ''
    })
    const [profileError, setProfileError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        country: '',
        role: '',
        experience: '',
        gender: '',
        twitter: '',
        linkedin: '',
        about: '',
        profileImage: '',
        coverImage: ''
    })
    const updateProfile = () => {
        const profileAfterValidate = profileValidator(profileData)
        if (profileAfterValidate.isValid) {
            // props.registerUser(userData, props.history)
            setProfileError(Object.keys(profileError).forEach(v => profileError[v] = ''))
        } else {
            setProfileError({ ...profileError, ...profileAfterValidate.errors })
        }
    }
    useEffect(()=>{
        let {user} = props.auth
        let fullName = user.displayName.split(' ')
        setProfileData({...profileData, firstName:fullName[0], lastName:fullName[1], email:user.email})
    },[profileData.email])

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
                            value={profileData.firstName}
                            disabled
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
                            value={profileData.lastName}
                            disabled
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
                            value={profileData.email}
                            disabled
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
                            value={profileData.city}
                            onChange={e => setProfileData({ ...profileData, [e.target.name]: e.target.value })}
                        />
                          <small className='ml-2 text-danger' >{profileError.city ? profileError.city : ''}</small>
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
                                name='country'
                                value={profileData.country}
                                onChange={e => setProfileData({ ...profileData, [e.target.name]: e.target.value })}
                            >
                                <MenuItem value='pakistan'>Pakistan</MenuItem>
                                <MenuItem value='india'>India</MenuItem>
                                <MenuItem value='austrilia'>Austrilia</MenuItem>
                                <MenuItem value='united_state'>United State</MenuItem>
                                <MenuItem value='united_kingdom'>United Kingdom</MenuItem>
                                <MenuItem value='china'>China</MenuItem>
                                <MenuItem value='japan'>Japan</MenuItem>
                            </Select>
                        </FormControl>
                        <small className='ml-2 text-danger' >{profileError.country ? profileError.country : ''}</small>
                    </div>
                    <div className='col-sm col-md-6' >
                        <FormControl variant="outlined" className={classes.selectField}>
                            <InputLabel className={classes.selectLabel} id="role">
                                Role
                             </InputLabel>
                            <Select
                                id="role"
                                name='role'
                                value={profileData.role}
                                onChange={e => setProfileData({ ...profileData, [e.target.name]: e.target.value })}
                            >
                                <MenuItem value='softwareEngineer'>Software Engineer</MenuItem>
                                <MenuItem value='investor'>Invester</MenuItem>
                            </Select>
                        </FormControl>
                        <small className='ml-2 text-danger' >{profileError.role ? profileError.role : ''}</small>

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
                                name='experience'
                                value={profileData.experience}
                                onChange={e => setProfileData({ ...profileData, [e.target.name]: e.target.value })}
                            >
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={6}>Six</MenuItem>
                                <MenuItem value={8}>Eight</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                        </FormControl>
                        <small className='ml-2 text-danger' >{profileError.experience ? profileError.experience : ''}</small>
                    </div>
                    <div className='col-sm col-md-6' >
                        <FormControl variant="outlined" className={classes.selectField}>
                            <InputLabel className={classes.selectLabel} id="gender">
                                Gender
                             </InputLabel>
                            <Select
                                id="gender"
                                name='gender'
                                value={profileData.gender}
                                onChange={e => setProfileData({ ...profileData, [e.target.name]: e.target.value })}
                            >
                                <MenuItem value='male'>Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                            </Select>
                        </FormControl>
                        <small className='ml-2 text-danger' >{profileError.gender ? profileError.gender : ''}</small>
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
                            value={profileData.twitter}
                            onChange={e => setProfileData({ ...profileData, [e.target.name]: e.target.value })}
                        />
                    <small className='ml-2 text-danger' >{profileError.twitter ? profileError.twitter : ''}</small>
                    </div>
                    <div className='col-sm col-md-6' >
                        <TextField
                            name='linkedin'
                            type='text'
                            label="LinkedIn Account"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={profileData.linkedin}
                            onChange={e => setProfileData({ ...profileData, [e.target.name]: e.target.value })}
                        />
                        <small className='ml-2 text-danger' >{profileError.linkedin ? profileError.linkedin : ''}</small>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm-12' >
                        {profileData.role === 'softwareEngineer' ?(
                        <ChipInput
                        variant='outlined'
                        className={classes.textField}
                        label="Skills"
                        margin="normal"
                        value={profileData.skills}
                        onChange={(skill)=>setProfileData({...profileData,skills:skill})}
                    />
                        ):''}
                        <small className='ml-2 text-danger' >{profileError.skills ? profileError.skills : ''}</small>
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
                            name='about'
                            value={profileData.about}
                            onChange={e => setProfileData({ ...profileData, [e.target.name]: e.target.value })}
                        />
                         <small className='ml-2 text-danger' >{profileError.about ? profileError.about : ''}</small>
                    </div>
                </div>
                <div className='row mt-3' >
                    <div className='col-sm col-md-6' >
                        <DropzoneArea
                            dropzoneText={'Upload Profile Picture'}
                            acceptedFiles={['image/*']}
                            filesLimit={1}
                            onChange={(files) => setProfileData({...profileData,coverImage:files[0]})}
                        />
                        <small className='ml-2 text-danger' >{profileError.profileImage ? profileError.profileImage : ''}</small>
                    </div>
                    <div className='col-sm col-md-6' >
                        <DropzoneArea
                            dropzoneText={'Upload Cover Image'}
                            acceptedFiles={['image/*']}
                            filesLimit={1}
                            onChange={(files) => setProfileData({...profileData,profileImage:files[0]})}
                        />
                <small className='ml-2 text-danger' >{profileError.coverImage ? profileError.coverImage : ''}</small>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm col-md-12' >
                        <Button onClick={()=> updateProfile()} variant="outlined" color="primary" className={classes.button}>
                            Update Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    auth: state.authReducer
})

export default connect(mapStateToProps)(ProfileEdit);