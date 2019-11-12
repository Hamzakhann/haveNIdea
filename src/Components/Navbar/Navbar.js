import React,{useState} from 'react';
import NavLg from './NavLg';
import NavSm from './NavSm';
import './nav.css';



function Navbar(props) {
  return (
    <div className='container-fluid p-0'>
      <div className='d-none d-sm-none d-md-block'  >
        <NavLg />
      </div>
      <div className='d-block  d-md-none'>
        <NavSm />
      </div>
    </div>
  );
}

export default Navbar;