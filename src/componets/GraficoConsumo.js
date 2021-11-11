import React from 'react'
import { Bar } from 'react-chartjs-2';

const GraficoConsumo= ({datosFactura})=> {
    const axuData =[]; //array auxiliar que recibe los datos en kwh
    const axuLabels =[];//array auxiliar que recibe los datos en formato fecha del mes facturado
    const arex = []; //array que recibe los resultados de la funcion convertir   (recibe los nombres de los meses)

    datosFactura.map(element=>{
        return axuData.push(element.kwh);//envia los datos al arreglo axuData
    })

    datosFactura.map(element=>{
        return axuLabels.push(element.mes_facturado);//envia los datos al arreglo axuLabels
    })


    const convertir = (fecha) => {//funcion que saca del formato fecha año/mes/dia el nombre del mes y lo envia al array arex que sera los labels del grafico
        for (let i = 0; i < fecha.length; i++) {
            const mes = fecha[i];

            const partida = mes.substring(5, 7);

            switch (partida) {
                case "01":
                    arex.push("Enero")
                    break;                    
                case "02":
                    arex.push("Febrero")
                    break;                    
                case "03":
                    arex.push("Marzo")
                    break;                    
                case "04":
                    arex.push("Abril")
                    break;                    
                case "05":
                    arex.push("Mayo")
                    break;                    
                case "06":
                    arex.push("Junio")
                    break;
                case "07":
                    arex.push("Julio")
                    break;
                case "08":
                    arex.push("Agosto")
                    break;                    
                case "09":
                    arex.push("Septiembre")
                    break;                    
                case "10":
                    arex.push("Octubre")
                    break;                    
                case "11":
                    arex.push("Noviembre")
                    break;                    
                case "12":
                    arex.push("Diciembre")
                    break;                    
                default:
                    return "nope"
                
            };
    
        }
    }
    convertir(axuLabels)

    return (
        <div>
            <Bar
                data={{
                    labels:  arex.slice(arex.length-6),
                    datasets: [{
                        label: 'Consumo de energia en Kw/h',
                        data: axuData.slice(arex.length-6),
                        
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
                        ],
                        borderWidth: 2
                    }]

                }}
                width={600}
                height={350}
            />
        </div>
    )
}

export default GraficoConsumo
