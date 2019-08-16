import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Redux/index.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Service/RootSaga'
const sagaMiddleware = createSagaMiddleware();
var store =createStore(rootReducer,applyMiddleware(sagaMiddleware));
//ReactDOM.render(<App />, document.getElementById('root'));
sagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
