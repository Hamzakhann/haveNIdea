import {createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './Reducers/rootReducer';
const middleware = [thunk];

const initialState = {}
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export default () => {
  let store = createStore(persistedReducer,
    initialState ,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f
    )
    )
  let persistor = persistStore(store)
  return { store, persistor }
}

// const store = createStore(rootReducer , 
//   initialState ,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__
//         ? window.__REDUX_DEVTOOLS_EXTENSION__()
//         : f => f
//   )
  
// );

// export default store;