import React from 'react';

import './styles.css';
import Header from './components/Header';
import Router from './controllers/router';

const App = () => (
  <div className="App">
    <Header />
    <Router />
  </div>
);

export default App;
