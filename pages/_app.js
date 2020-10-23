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
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
