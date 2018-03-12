import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';
import {createStore,applyMiddleware} from 'redux';

let store = createStore(reducer,{}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
