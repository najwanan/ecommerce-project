import React from 'react'
import ReactDOM from 'react-dom'
//import Paper from '@mui/material/Paper'
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

export default function LineChart(props) {

  
        const data = [
          { x: 1, y: 30 },
          { x: 2, y: 40 },
          { x: 3, y: 5 },
          { x: 4, y: 2 },
          { x: 5, y: 21 },
        ];
         return (
           <div>
            
             <div className="chartDiv">
               <Chart className ="chartItem" data={data}>
                 <ArgumentAxis />
                 <ValueAxis />
                 <LineSeries valueField="y" argumentField="x" />
               </Chart>
             </div>
           </div>
         );
    
   
   
}