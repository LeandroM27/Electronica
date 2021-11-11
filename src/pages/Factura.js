import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import * as FaIcons from "react-icons/fa";
import axios from 'axios'
import Swal from 'sweetalert2'

const Factura = () => {

    const [distri, setDistribuidores] = useState([]);

    const getDistribuidores = async() =>{
        await axios.get("http://localhost:8080/distribuidores")
        .then(response=>{
            setDistribuidores(response.data.data)
        })
    }
  
    useEffect(()=>{
        getDistribuidores();
    }, [])


    //Obtener datos
    const [newFactura, setNewFactura] = useState({
        id_usuario: "",
        id_distribuidor: "",
        kwh: "",
        multiplicador: "",
        dias_facturados: "",
        mes_facturado: "",
        tipo_uso: "",
        cargo_distribucion: "",
        cargo_comercializacion: "",
        cargo_energia: "", 
        cobro_desde: "",
        cobro_hasta: "",
        corre: ""
    })
    
    const handleChange = ({target}) =>{
        setNewFactura({
            ...newFactura,
            [target.name] : target.value,
        })
    }

    const handleSubmit = async (e) => {

        try {
            e.preventDefault();
            
            //conversiones
            const userData = parseInt(newFactura.id_usuario);
            const distribuidorData = parseInt(newFactura.id_distribuidor);
            const kwhData = parseInt(newFactura.kwh);
            const multiplicadorData = parseInt(newFactura.multiplicador);
            const diasfacturadosData = parseInt(newFactura.dias_facturados);
            const mesfacturadoData = newFactura.mes_facturado;
            const tipousoData = newFactura.tipo_uso;
            const cargodistribucionData = parseFloat(newFactura.cargo_distribucion);
            const cargocomercializacionData = parseFloat(newFactura.cargo_comercializacion);
            const cargoenergiaData = parseFloat(newFactura.cargo_energia);
            const cobrodesdeData = newFactura.cobro_desde;
            const cobrohastaData = newFactura.cobro_hasta;
            const correoData = newFactura.correo;

            const data = {
                id_usuario: userData,
                id_distribuidor: distribuidorData,
                correo: correoData,
                kwh: kwhData,
                multiplicador: multiplicadorData,
                dias_facturados: diasfacturadosData,
                mes_facturado: mesfacturadoData,
                tipo_uso: tipousoData,
                cargo_distribucion: cargodistribucionData,
                cargo_comercializacion: cargocomercializacionData,
                cargo_energia: cargoenergiaData,
                cobro_desde: cobrodesdeData,
                cobro_hasta: cobrohastaData
            }

            const response = await axios.post("http://localhost:8080/facturas", data);

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro con exito',
                    text: "Factura agregada con exito",
                  })
            }
        } 
        catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Algo salio mal',
                text: error.response.data.msg
              })
        }
    }


    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <form onSubmit={handleSubmit} >
                        <h1 className="mt-4"><FaIcons.FaDatabase/> Ingreso de datos</h1>
                        <div className="row">
                            <div className="col-7">
                                <h5>Información de la Factura</h5>
                                <div className="row">
                                    <div className="col-6 form-group mb-4">
                                        <label for="desde">Fecha desde</label>
                                        <div className="col-12">
                                            <input type="date" 
                                            className="form-control" 
                                            id="desde"
                                            name="cobro_desde"
                                            value={newFactura.cobro_desde}
                                            onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6 form-group mb-4">
                                        <label for="hasta">Fecha hasta</label>
                                        <div className="col-12">
                                        <input type="date" 
                                        className="form-control" 
                                        id="hasta" 
                                        name="cobro_hasta"
                                        value={newFactura.cobro_hasta}
                                        onChange={handleChange}
                                        />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4 form-group mb-4">
                                        <label for="energia">Cargo de energia</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id="energia" 
                                        name="cargo_energia"
                                        placeholder="0.00"
                                        value={newFactura.cargo_energia}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-4 form-group mb-4">
                                        <label for="comercializacion">Cargo de Comercializacion</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id="comercializacion" 
                                        name="cargo_comercializacion"
                                        placeholder="0.00"
                                        value={newFactura.cargo_comercializacion}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-4 form-group mb-4">
                                        <label for="distribucion">Cargo de distribucion</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id="distribucion" 
                                        name="cargo_distribucion"
                                        placeholder="0.00"
                                        value={newFactura.cargo_distribucion}
                                        onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4 form-group mb-4">
                                        <label for="uso">Tipo de Uso</label>
                                        <select className="form-select" 
                                        name="tipo_uso"
                                        onChange={handleChange}>
                                            <option selected>Seleccione una opción</option>
                                            <option value="General">General</option>
                                            <option value="Residencial">Residencial</option>
                                        </select>
                                    </div>

                                    <div className="col-4 form-group mb-4">
                                        <label for="mesfac">Mes de Facturacion</label>
                                        <input type="date" 
                                        className="form-control" 
                                        id="mesfac"
                                        name="mes_facturado"
                                        value={newFactura.mes_facturado}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-4 form-group mb-4">
                                        <label for="diasfac">Dias de Facturacion</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id="diasFact" 
                                        name="dias_facturados"
                                        placeholder="0.00"
                                        value={newFactura.dias_facturados}
                                        onChange={handleChange} 
                                        />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-4 form-group mb-4">
                                        <label for="multi">Multiplicador</label>
                                        <select className="form-select" 
                                        aria-label="Default select example"
                                        name="multiplicador"
                                        onChange={handleChange}>
                                            <option selected>Seleccione una opción</option>
                                            <option value="1">1</option>
                                            <option value="1200">1200</option>
                                        </select>
                                    </div>

                                    <div className="col-4 form-group mb-4">
                                        <label for="kwh">Kwh</label>
                                        <input type="text" 
                                        className="form-control" 
                                        id="kwh" 
                                        name="kwh"
                                        placeholder="0.00"
                                        value={newFactura.kwh}
                                        onChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-4 form-group mb-4">
                                        <label for="distribuidor">Distribuidor</label>
                                        <select className="form-select" aria-label="Default select example" name="id_distribuidor" value={newFactura.id_distribuidor} onChange={handleChange} >
                                            {distri.map(item => (
                                                <option key={item.id_distribuidor} value={item.id_distribuidor}>{item.nombre}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="col"></div>
                            <div className="col-4">
                            <h5>Información del Cliente</h5>
                                <div className="col-10 form-group mb-4">
                                    <label for="nic">NIC Usuario</label>
                                    <input type="text" 
                                        className="form-control" 
                                        id="nic" 
                                        name="id_usuario"
                                        placeholder="0.00"
                                        value={newFactura.id_usuario}
                                        onChange={handleChange} 
                                    />
                                </div>

                                <div className="col-10 form-group mb-4">
                                    <label for="correo">Correo</label>
                                    <input type="text" 
                                    className="form-control" 
                                    id="correo" 
                                    name="correo"
                                    placeholder="example@example.com"
                                    value={newFactura.correo}
                                    onChange={handleChange} 
                                    />
                                </div><br /><br /><br /><br /><br /><br /><br /><br />

                                <div className="col-10 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary ">Enviar</button>
                                </div>
                            </div>
                        </div><br /><br />                        
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Factura
