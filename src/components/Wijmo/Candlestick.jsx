import React, {useState, useEffect} from 'react';
import * as Chart from '@grapecity/wijmo.react.chart';
import { getAssetData, updateData } from '../../data';


const tooltip = (`<b>{date:MMM dd}</b><br/>
                <table>
                    <tr><td>high:</td><td>{high}</td><tr/>
                    <tr><td>low:</td><td>{low}</td><tr/>
                    <tr><td>open:</td><td>{open}</td><tr/>
                    <tr><td>close:</td><td>{close}</td><tr/>
                </table>
            </b>`
        )



const palette =  ['rgba(70,107,176,1)', 'rgba(200,180,34,1)', 'rgba(20,136,110,1)', 'rgba(181,72,54,1)',
    'rgba(110,89,68,1)', 'rgba(139,56,114,1)', 'rgba(115,178,43,1)', 'rgba(184,115,32,1)', 'rgba(20,20,20,1)']



const Candlestick = () => {

    const [data, setData] = useState(getAssetData());

    useEffect(() => {
    
        const interval = setInterval(() => {

            setData(data =>  [...data.slice(1), updateData(data)])

        }, 3000);
        
        return () => clearInterval(interval)

    }, []);
          
    return (
        <div className="chart app-box">

            <div className="header"> <h3>Statistics</h3> </div>

            <Chart.FlexChart 
                bindingX="date" 
                itemsSource={data} 
                chartType="Candlestick" 
                tooltipContent={tooltip} palette={palette}>

            <Chart.FlexChartSeries binding="high,low,open,close"></Chart.FlexChartSeries>
            
            </Chart.FlexChart>

        </div>
    )

}

export default Candlestick
