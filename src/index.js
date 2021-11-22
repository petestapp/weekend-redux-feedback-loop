import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// reducer
const feedback = (
    state={
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    }, action)=>{
        if(action.type === 'SET_FEELING'){
            return {...state, feeling: action.payload};
        }
        if(action.type === 'SET_UNDERSTANDING'){
            return {...state, understanding: action.payload};
        }
        if(action.type === 'SET_SUPPORT'){
            return {...state, support: action.payload};
        }
        if(action.type === 'SET_COMMENTS'){
            return {...state, comments: action.payload};
        }
    return state
}

// store
const storeInstance = createStore(
    combineReducers(
      {
        feedback
      }
    ),
    applyMiddleware(
      logger
    )
  );

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
