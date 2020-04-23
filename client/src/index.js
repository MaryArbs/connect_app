// import * as serviceWorker from './serviceWorker'; what does this do ?
import React from 'react'; //react is a npm package. Need to turn JSX into JS using babel 
import ReactDOM from 'react-dom'; //provides DOM-specific methods (render())
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'; // giving acces to set u routes and change URL

// set up Redux store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //middleware is thunk (between action and reducer/async API calls)
import { composeWithDevTools } from 'redux-devtools-extension'; //Redux dev tools
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//look into service worker
