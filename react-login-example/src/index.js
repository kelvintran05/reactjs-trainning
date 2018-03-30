import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/app';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
// import { Router, browserHistory } from 'react-router';
const logger= createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk,logger)
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
