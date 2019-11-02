import React from 'react';
import Routes from './Routes/Routes';
import {Provider} from 'react-redux';
import store from './Store/Store';
import {setCurrentUser,logoutUser} from './Store/Actions/authActions';
function App() {


  if(localStorage.getItem('user') !==null){
    store.dispatch(setCurrentUser(JSON.parse(localStorage.getItem('user'))))
  }

  logoutUser()

  return (
    <div className='container-fluid p-0' >
          <Provider store = {store} >
          <Routes/>
          </Provider>
      </div>
  );
}

export default App;
