import React from 'react';
import { IconButton, Button, List, ListItem, ListItemText } from '@material-ui/core';
import './profileComplete.css'
function ProfileComplete(props) {
    return (
        <div className='container' >
            <div className='cover-image'></div>
            <div className='profile-image' ></div>
            <div className='profile-title' >
                <div className='mt-3' >
                    <IconButton >
                        <i class="fab fa-facebook-f"></i>
                    </IconButton>
                    <IconButton >
                        <i class="fab fa-linkedin-in"></i>
                    </IconButton>
                </div>
                <h1>Hamza Khan</h1>
                <p>Investor</p>
                <p>4 Years Experience</p>
            </div>
            <di className='about-content'>
                <h3>ABOUT</h3>
                <p>
                    I m a student of Computer Science in University.
                    I am passionate about keeping up to date with the latest technologies coming in the software industry
                    I love to learning new things everyday to enhance my knowledge
                    I m currently focusing on cloud computing and want to be a Amazon Certified Developer.
                </p>
            </di>
            <div className='profile-skills' >
                <h3>SKILLS</h3>
                <div className='mt-2' >
                    <div class="list-group">
                        <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                        <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                        <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                        <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                        <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                        <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                    </div>
                </div>
            </div>
            <div className='update-profile' >
                <Button color="secondary" variant="outlined" >Update Your Profile</Button>
            </div>
        </div>
    );
}

export default ProfileComplete;