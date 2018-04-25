import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import './index.css'

import localStore from './store';

ReactDOM.render(
    <Provider store={store} localStore={localStore}>
        <Router />
    </Provider>
,
 document.getElementById('root'));
registerServiceWorker();
