import React from 'react'
import * as FaIcons from "react-icons/fa";
import DatosFactura from '../componets/DatosFactura.js';
import GraficoConsumo from '../componets/GraficoConsumo.js';
import GraficoDetalles from '../componets/GraficoDetalles.js';

const Dashboard = ({datosFactura}) => {
    //tomo el estado antes de pasarlo como prop y lo corto
    const limitador = 6;
    const datosLimitados = datosFactura.slice(0, limitador);


    //Card mes con mayor y menor consumo
    const arrayMesMayorD = [];//array que recibe todos los kw/h consumidos
    const arrayMesMayorF = [];//array que recibe todos las fechas

    datosFactura.map(element=>{
        return arrayMesMayorD.push(element.kwh); 
    })
    datosFactura.map(element=>{
        return arrayMesMayorF.push(element.mes_facturado); 
    })

    const mesMayorConsumo = (arreglo) =>{//funcion que saca el dato del mes de mas consumo en kw/h
        if (arreglo.length === 0) {
            return "0"
        } 
        else {    
            const maxKwh = Math.max(...arreglo);
            return maxKwh;
        }
    }
    
    const mesMenorConsumo = (arreglo) =>{//funcion que saca el dato del mes de mas consumo en kw/h
        if (arreglo.length === 0) {
            return "0"
        } 
        else {    
            const minKwh = Math.min(...arreglo);
            return minKwh;
        }

    }

    //Card distribuidor
    const arrayDistribuidor = [];
    datosFactura.map(element=>{
        return arrayDistribuidor.push(element.distribuidor); 
    })

    const obtenerDistribuidor = (arreglo) =>{

        if (arreglo === undefined) {
            return "..."
        } else {
            return arreglo;
        }
    }



    //Card promedio consumo
    const arrayPromediokwh = [];//array que recibe todos los kw/h consumidos
    datosFactura.map(element=>{
        return arrayPromediokwh.push(element.kwh);
    })

    const promedioConsumo = (arreglo) =>{//funcion para sacar el promedio consumido en kwh de todos los tiempos
        if (arreglo.length === 0) {
            return "0"
        } 
        else {
            let suma = 0;

            for (let i = 0; i < arreglo.length; i++) {
                suma += arreglo[i];
            }
    
            let promedioArray = suma / arreglo.length;
            return (promedioArray.toFixed(2)) 
        }

    }

    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4"><FaIcons.FaLaptopHouse/> Dashboard</h1><br /><br />

                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-primary text-white shadow-sm rounded">
                                <div className="card-body">
                                    <FaIcons.FaChartLine size={50}/>
                                    <h5 className="card-title">Mes con mayor consumo:</h5>
                                    <h4 className="card-text">{mesMayorConsumo(arrayMesMayorD)} Kw/h</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-danger text-white shadow-sm rounded">
                                <div className="card-body">
                                    <FaIcons.FaArrowDown size={50}/>
                                    <h5 className="card-title">Mes con menor consumo</h5>
                                    <h4 className="card-text">{mesMenorConsumo(arrayMesMayorD)} Kw/h</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-secondary text-white shadow-sm rounded">
                                <div className="card-body">
                                    <FaIcons.FaChartBar size={50}/>
                                    <h5 className="card-title">Promedio de consumo:</h5>
                                    <h4 className="card-text">{promedioConsumo(arrayPromediokwh)} Kw/h</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white shadow-sm rounded">
                                <div className="card-body">
                                    <FaIcons.FaRegLightbulb size={50}/>
                                    <h5 className="card-title">Distribuidor</h5>
                                    <h4 className="card-text">{obtenerDistribuidor(arrayDistribuidor[0])}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br></br>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card mb-4 shadow-sm rounded">
                                <div className="card-header">
                                    Consumo ultimos 6 meses
                                </div>
                                <div className="card-body">
                                    <GraficoConsumo datosFactura={datosFactura}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6">
                            <div className="card mb-4 shadow-sm rounded">
                                <div className="card-header">
                                    Consumo detallado del ultimo mes
                                </div>
                                <div className="card-body">
                                    <GraficoDetalles datosFactura={datosFactura}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4 shadow-sm rounded">
                        <div className="card-header">
                            Hitorial de Pagos
                        </div>

                        <div className="card-body">
                            <table id="myTable" className="table table-hover">
                                <DatosFactura datosFactura={datosLimitados}/>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard