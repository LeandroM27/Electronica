import DatoFactura from '../componets/DatoFactura.js';

const datosFactura = ({datosFactura}) => {
    return(
        <>
            <thead>
                <tr>
                    <th>Fecha desde</th>
                    <th>Fecha hasta</th>
                    <th>Mes</th>
                    <th>Consumo Kw/h</th>
                    <th>Cargo comercial</th>
                    <th>Cargo distribucion</th>
                    <th>Distribuidor</th>
                </tr>
            </thead>
            {datosFactura.map((datoF) => (
                <DatoFactura key={datoF.id_factura} datoF={datoF} />
            ))}
        </>
    )
}

export default datosFactura;