import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Deposito from './pages/Deposito';
import Retiro from './pages/Retiro';
import Informacion from './pages/Informacion';

function App() {
  const[cuenta, setCuenta] = useState(0)

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index 
          element={<Home 
            cuenta={cuenta}
          />} />

          <Route path="deposito" 
          element={<Deposito 
            cuenta={cuenta}
            setCuenta={setCuenta}
           />} />
          <Route path="retiro" element={<Retiro 
            cuenta={cuenta}
            setCuenta={setCuenta}
          />} />
          <Route path="informacion" element={<Informacion />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
