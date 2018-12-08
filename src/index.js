
// *----------* create-react-app *----------*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';

// *----------* Redux *----------*
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const reviewReducer = (state = {}, action) =>{
    return state;
}

const storeInstance = createStore(
    // This is a reducer. It's called when the page loads or
    // dispatch is called.
    combineReducers({
        reviewReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render( <Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
