import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

import randomizeArray from 'react-apexcharts'

const Graphs = () => {

    const [Fourthchart, SetFourthChart]= useState({
      
      series: [{
          name: 'Courses',
          type: 'column',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
          name: 'Students',
          type: 'column',
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
          name: 'Months',
          type: 'line',
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 4]
          },
          title: {
            text: 'XYZ - E Learning Platform Analysis (2022 - 2023)',
            align: 'left',
            offsetX: 110
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                style: {
                  colors: '#008FFB',
                }
              },
              title: {
                text: "E-Learning Platform",
                style: {
                  color: '#008FFB',
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Income',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#00E396'
              },
              labels: {
                style: {
                  colors: '#00E396',
                }
              },
              title: {
                text: "E-Learning Platform",
                style: {
                  color: '#00E396',
                }
              },
            },
            {
              seriesName: 'Revenue',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#FEB019'
              },
              labels: {
                style: {
                  colors: '#FEB019',
                },
              },
              title: {
                text: "E-Learning Platform",
                style: {
                  color: '#FEB019',
                }
              }
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            },
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
  })
  return (
    <div className="bg-blue-100 p-14" >
    <section  className={` bg-gray-100 le-50 flex flex-col py-20  mx-10 px-5 rounded-[2%] ` }>
     <div id="chart">
     <ReactApexChart
   options={Fourthchart.options} 
   series={Fourthchart.series} 
   type="line"
       height={350}
     //   width= {500}
     />
   </div>
  </section>
 </div>
  ) 
}

export default Graphs