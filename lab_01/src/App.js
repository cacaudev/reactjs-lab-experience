import React from 'react';

import './assets/css/global.css';
import Header from './components/Header';
import Router from './controllers/router';

const App = () => (
  <div className="App">
    <Header />
    <Router />
  </div>
);

export default App;
