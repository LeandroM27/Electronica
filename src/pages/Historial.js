import React from 'react'
import * as FaIcons from "react-icons/fa";
import DatosFacturas from '../componets/DatosFacturas';

const Historial = ({datosFactura}) => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4"><FaIcons.FaClipboardList/> Historial Pagos</h1><br />
                    <div className="row">
                        <div className="col-10">
                            <div className="card mb-4 shadow-sm rounded">
                                <div className="card-body">
                                    <DatosFacturas/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>

    )
}

export default Historial