// Import React from 
import React from "react";

// Importing All Cards, Chart, CountryPicker from components Folder.
import {Card, CardContent, Typography, Grid} from "@material-ui/core";

// Imporying styles from App.module.css file.
import styles from "./Cards.module.css"

// Import CountUp after installing react-countup package install.
import CountUp from "react-countup"

// Import classnames from React.
import cx from "classnames"

// functionall-base Componenet Declayer.
const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
  console.log(confirmed)
  if(!confirmed){
    return "Loading...";
  }

  // Return the data to frounted.
  return(
    <div className={styles.container}>

      <Grid container spacing={3} justifyContent="center">

      {/* One Card Which Name Infected */}
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Again Test</Typography>
          <Typography varaint="h5">
            <CountUp  start={0} end={confirmed.value} duration={2.5}separator="," />
          </Typography>
          <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases of COVID19</Typography>
        </CardContent>
      </Grid>
      
      {/* Two Card Which Name Recovered */}
     <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
           <Typography varaint="h5">
            <CountUp  start={0} end={recovered.value} duration={2.5}separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of recoverise from COVID19</Typography>
        </CardContent>
      </Grid>

     {/* Three Card Which Name Deaths */}
     <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
         <Typography varaint="h5">
            <CountUp  start={0} end={deaths.value} duration={2.5}separator="," />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of deaths caused by COVID19</Typography>
        </CardContent>
      </Grid>

      </Grid>

    </div>
  )
}

// Export Cards default.
export default Cards;