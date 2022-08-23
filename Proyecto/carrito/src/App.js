import React from 'react'
import { Carrito } from "./componente/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Carrito />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;