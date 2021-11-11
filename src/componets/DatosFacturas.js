import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

const DatosFacturas = () => {

    const columns = [
        {
            name: 'Cobro desde',
            selector: row => row.cobro_desde.substring(0, 10),
            sortable: true
        },
        {
            name: 'Cobro hasta',
            selector: row => row.cobro_hasta.substring(0, 10),
            sortable: true
        },
        {
            name: 'Mes',
            selector: row => row.mes_facturado.substring(0, 7),
            sortable: true
        },
        {
            name: 'Consumo Kw/h',
            selector: row => row.kwh,
            sortable: true
        },
        {
            name: 'Cargo Comercial',
            selector: row => row.cargo_comercializacion.substring(0, 4),
            sortable: true
        },
        {
            name: 'Cargo Distribucion',
            selector: row => row.cargo_distribucion.substring(0, 4),
            sortable: true
        },
    ]

    
    const [data, setData] = useState([]);


    const getFacturas = async() =>{
        const userPayload = 202106;
        await axios.get("http://localhost:8080/facturas/"+userPayload)
        .then(response=>{
            setData(response.data.facturas)
        })
    }

    useEffect(()=>{
        getFacturas();
    }, [])

    return (
        <DataTable
            columns={columns}
            data={data}
            title= {"Historial de Consumo"}
            pagination
            responsive
            highlightOnHover
            striped
            fixedHeader
            fixedHeaderScrollHeight="500px"
        />
    );
}

export default DatosFacturas
