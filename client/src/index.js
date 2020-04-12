// import * as serviceWorker from './serviceWorker'; what does this do ?
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// import { BrowserRouter as Router} from 'react-router-dom';

// set up Redux store
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';

// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(thunk)
// ))

ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//look into service worker
