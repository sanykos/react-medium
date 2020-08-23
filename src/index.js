import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './pages/routes'
import TopBar from './components/TopBar/TopBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const App = () => {
  return(
    <div>
      <Router>
          <TopBar />
          <Routes />
      </Router>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


