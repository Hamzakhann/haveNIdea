// @flow 
import * as React from 'react';
import spinner from '../../Assets/spinner.gif'
const Spinner = (props) => {
    return (
        <div className='container-fluid' >
            <div style={{height:'100%'}} className='d-flex justify-content-center align-items-center' >
            <img src={spinner} alt='loading.......' />
            </div>
        </div>
    );
};


export default Spinner;