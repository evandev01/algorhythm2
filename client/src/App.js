import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Playlist from './pages/Playlist';
import Search from './pages/Search';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <Router>
      <div>
      <NavbarComp/>
        <Route path='/' exact component={Search} />
        <Route path='/playlist' exact component={Playlist} />
      </div>
    </Router>
  );
}

export default App;
