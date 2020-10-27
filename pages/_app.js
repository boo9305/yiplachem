import '../styles/globals.css'
import '../styles/globals.mobile.css'
import authReducer from '../store/reducers/auth'

import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import reduxThunk from 'redux-thunk';



const composeEnhancers = compose;
const rootReducer = combineReducers ( {
  auth : authReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap" rel="stylesheet"/>  
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap" rel="stylesheet"/>  
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
