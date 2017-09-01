import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import SearchBar from './components/search_bar.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/home' component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
