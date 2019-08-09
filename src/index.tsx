import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';
import { Provider } from 'react-redux';
import './index.less';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
