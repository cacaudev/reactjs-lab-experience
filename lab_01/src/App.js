import React from 'react';

import Header from './components/Header';
import Router from './controllers/router';

// Importing the global styles
import './assets/css/global.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <div className="App">
    <Header />
    <Router />
  </div>
);

export default App;
