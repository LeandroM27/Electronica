import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Navbar from './componets/Navbar';
import Dashboard from './pages/Dashboard';
import Factura from './pages/Factura';
import Historial from './pages/Historial';
import Login from './pages/Login';
import Nav from './componets/auth/Nav';
import Signup from './pages/Signup';

import {useState, useEffect} from 'react';

function App() {

  //Peticion para obtener datos
  const [datosFactura, setDatosFactura] = useState([]);
  
  const getFacturas = async() =>{
      const userPayload = 202106;
      await axios.get("http://localhost:8080/facturas/"+userPayload)
      .then(response=>{
        setDatosFactura(response.data.facturas)
      })
  }

  useEffect(()=>{
      getFacturas();
  }, [])

  return (
    <>
      <Router>
      <Nav />
        <Switch>

          <Route path="/" exact component={Login}/>

          <Route path="/Signup" component={Signup}/>

          <Route path="/Dashboard" render={
            
            (porps) => (
              <>
                <Navbar />
                <Dashboard datosFactura={datosFactura}/>
              </>
            )
          }/>
          <Route path="/factura" render={
            (porps) => (
              <>
                <Navbar />
                <Factura/>
              </>
            )
          }/>
          <Route path="/historial" render={
            (porps) => (
              <>
                <Navbar />
                <Historial datosFactura={datosFactura}/>
              </>
            )
          }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;