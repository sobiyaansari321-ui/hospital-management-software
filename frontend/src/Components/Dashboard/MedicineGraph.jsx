import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TbBackground } from 'react-icons/tb';

import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

 export const data = {
  labels : ['Paracatamol','Vitamin Tablets','Antacid Tablets','Others'],
  datasets : [
    {
      label : 'Medicine Sold',
      data : [ 55,12,25,8 ],
      backgroundColor : ['#276bff','#57ff52','#baadfdff','#fff94f'],
      border : 'none'
    },
  ] ,
};

const options = {
  plugins : {
    legend : {
      display : false ,
    },

    datalabels : {
      color : 'hsla(0, 33%, 97%, 1.00)',
      font : {
        size : '15px',
        weight :'bold',
      },
      formatter : ( value , context ) => {
        const dataArr = context.chart.data.datasets[0].data;
        const total = dataArr.reduce( (acc,val) => acc + val , 0);
        const percentage = (( value / total ) * 100).toFixed(0);
        return `${percentage}%`
      },
    },
  },
  cutout : '60%' ,
};



let MedicineGraph = () => {
    return (
        <div className='med-box rounded shadow-lg'>

            <div className='d-flex justify-content-between align-items-center'>

            <div className='bold m-2 p-2'>Medicine Sold</div>

          <div className="btn-group">
  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Select
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
            </div  >

            <div className="d-flex justify-content-center align-items-center">

            <div >
            <ul style={{ width:'200px'}}>
                <li className='med-li-1 med-li'>Paracatamol</li>
                <li className='med-li-2 med-li'>Vitamin Tablets</li>
                <li className='med-li-3 med-li'>Antacid Tablets</li>
                <li className='med-li-4 med-li'>Others</li>
            </ul>
            </div>

            <div style={{width:'40%'}} >
              <Doughnut 
              data={data} 
              options={options}
              />
            </div>

            </div>

        </div>
    )
}

export default MedicineGraph