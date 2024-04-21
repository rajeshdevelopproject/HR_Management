import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import './applicationInfo.scss'
import Dropdown from 'react-bootstrap/Dropdown';

const ApplicationInfo = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: '',
      type: 'column',
      data: [2000, 2500, 3000, 2500, 3300, 1700, 2700, 3500, 1700, 3000, 2300,2800]
    }, {
      name: '',
      type: 'line',
      data: [1800, 1700, 1000, 2500, 3300, 700, 1700, 3500, 1700, 2800, 2100,2600]
    }],
    options: {
      colors: ['#277ACC','#002B55'], 
      chart: {
        height: 200,
        type: 'line',
        stacked: false,
        zoom:false
      },
      stroke: {
        width: [3,5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          // stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {

        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    }
  });

  return (
    <div className='chart_div'>
      <div className='top-header'>
        <div className='title-side'>
          <p className='app-title'>Application’s  Info</p>
          <div className='chart-box'>
            <p className='box recevied'></p>
            <p>Received</p>
          </div>
          <div className='chart-box'>
          <p className='box process'></p>
            <p>Processed</p>
          </div>
        </div>
        <div>
          <Dropdown className='drop-but'> <Dropdown.Toggle id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
       
      </Dropdown.Menu></Dropdown>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={250} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApplicationInfo;
