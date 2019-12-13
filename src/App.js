import React ,{useState,useEffect} from 'react';
import Routes from './Routes/Routes';
import {Provider} from 'react-redux';
import persisterStore from './Store/Store';
import {setCurrentUser,logoutUser} from './Store/Actions/authActions';
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  let {store , persistor} = persisterStore()
  if(localStorage.getItem('user') !==null){
    store.dispatch(setCurrentUser(JSON.parse(localStorage.getItem('user'))))
  }
  return (
    <div className='container-fluid p-0' >
          <Provider store = {store} >
          <PersistGate loading={null} persistor={persistor}>
          <Routes/>
          </PersistGate>
          </Provider>
      </div>
  );
}

export default App;
