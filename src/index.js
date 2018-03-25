import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import { configureStore } from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
});
