import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';
//Provider is a react component that is provided to us by react-redux library.
// The purpose of this library is to work react and redux together.
import {createStore, applyMiddleware} from 'redux';
//Inside index.js we are going to create redux-store and render Provider tag.
import App from './components/App';
import reducer from './reducers';
const store = createStore(reducer,{}, applyMiddleware(reduxThunk));//create new instance of redux store 
// 1 arg is reducer, 2 arg is initial state of application
ReactDOM.render(
//Provider is a bonding layer btw react and redux. 
//In provider tag pass redux store and placed in parent component so every child can use it
<Provider store={store}>
    <App/>
</Provider>   
    , document.getElementById('root'));
    //after that make empty reducer
    console.log('stripe key is', process.env.REACT_APP_STRIPE_KEY);
    console.log('environment is', process.env.NODE_ENV);