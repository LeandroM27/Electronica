const DatoFactura = ({datoF}) => {
    //hacer funcion pasar mes en letras, luego pasar funcion con dato como arg
    const convertir = (fecha) => {
        
        const partida = fecha.substring(5, 7);
                
        switch (partida) {
            case "01":
                return "Enero"
            case "02":
                return "Febrero"
            case "03":
                return "Marzo"
            case "04":
                return "Abril"
            case "05":
                return "Mayo"
            case "06":
                return "Junio"
            case "07":
                return "Julio"
            case "08":
                return "Agosto"
            case "09":
                return "Septiembre"
            case "10":
                return "Octubre"
            case "11":
                return "Noviembre"
            case "12":
                return "Diciembre"
            default:
                return "nope"
        };
    }
    
    return(
        <>
            <tbody>
                <tr>
                    <td>{datoF.cobro_desde}</td>
                    <td>{datoF.cobro_hasta}</td>
                    <td>{convertir(datoF.mes_facturado)}</td>
                    <td>{datoF.kwh}</td>
                    <td>{datoF.cargo_comercializacion}</td>
                    <td>{datoF.cargo_distribucion}</td>
                    <td>{datoF.distribuidor}</td>
                </tr>
            </tbody>
        </>
    )
}

export default DatoFactura;