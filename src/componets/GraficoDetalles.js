import React from 'react'
import { Bar } from 'react-chartjs-2';

const GraficoDetalles = ({datosFactura}) => {
    const axuData =[];//recibe solo los datos de cargo_distribucion y cargo_comercializacion

    datosFactura.map(element=>{
        return axuData.push(element.cargo_distribucion, element.cargo_comercializacion);//envia los datos al arreglo axuData
    })
    
    return (  
        <div>
            <Bar
                data={{
                    labels:  ['Cargo Comercializacion', 'Cargo Distribucion'],
                    datasets: [{
                        label: 'Cargos',
                        data: axuData.reverse(),//siempre se obtendran los datos de consumo del ultimo mes
                        
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ]
                    }]

                }}
                width={600}
                height={350}

            />
        </div>
    );
}
 
export default GraficoDetalles;