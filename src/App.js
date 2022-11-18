import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './componentes/Home';
import NavBar from './componentes/NavBar';
import About from './componentes/About';
import Favorites from './componentes/Favorites';
import Location from './componentes/Location';
import Episode from './componentes/Episode';

import { BrowserRouter as Router, Routes } from "react-router-dom";
import CharacterDetail from './componentes/CharacterDetail';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/character/:id' element={<CharacterDetail />} />
          <Route path='/location' element={<Location />} />
          <Route path='/episode' element={<Episode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
