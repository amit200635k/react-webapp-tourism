import React from 'react';
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import { Home } from './components/Home';
import { Destinations_All } from './components/Destinations_All';
import { Destinations_Single } from './components/Destinations_Single';

function App() {
  return (
    <div>
          <Router >       
            {/*basename={"/reactLoginApp"} while deployment on wamp - "reactLoginApp" is the folder name in wamp */ }    
            <Routes>
               <Route exact path="/" element={<Home/>} /> 
               <Route exact path='/destinationAll' element={<Destinations_All/>} />
               <Route exact path='/dest' element={<Destinations_Single/>} />
            </Routes>
        </Router>
        
      </div>
  );
}

export default App;
