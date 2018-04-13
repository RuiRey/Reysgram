import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
//import './components/App.css';
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
,
 document.getElementById('root'));
registerServiceWorker();
