// Import React from react with useState.
import React, { useState, useEffect } from "react";

// Import fetchDailyData from Api file.
import { fetchDailyData } from "../../api";

// Import LineChart And BarChart After Installing The react-chartjs-2 package.
import { Line, Bar } from "react-chartjs-2"

// Import Styles From Charts.module.css file.
import styles from "./Charts.module.css" 

// Make Chart Functionbase component.
const Chart = ({ data:{confirmed, deaths, recovered}, country }) =>{
  const [dailyData, setDailyData] = useState([]);
 
   useEffect(()=>{
      const fetchAPI = async () => { setDailyData (await fetchDailyData()); 
   }
      fetchAPI();
   },[])

   // Declayer The LineChart.
    const lineChart = (
      dailyData.length ? (<Line 
        data = {{
          labels: dailyData.map(( {date} ) => date),
      datasets: [{
        data: 
          dailyData.map(({ confirmed }) => confirmed),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true,
      }, 
      { 
        data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          fill: true,
      }],
    }}
    /> ) : null
  );

// console.log(confirmed, recovered, deaths)

// Declare The BarChart.
    const barChart = (
      confirmed ? (<Bar
        data={{
          labels: ['Infected','Recovered', 'Deaths'],
          datasets:[{
          label:'People',
          backgroundColor:['rgba(0, 0, 255, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)',],
          data:[confirmed.value, recovered.value, deaths.value]
        }]
      }}
        options = {{
          legend: { display: false },
          title: {display: true, text:`Current State in ${country}`}
        }}/>
      ) : null
    )

  // Return The LineChart And BarChart.
  return(
     <div className={styles.container}>
        {country ? barChart: lineChart}
     </div>
  )
}

// Export The Chart.
export default Chart;



