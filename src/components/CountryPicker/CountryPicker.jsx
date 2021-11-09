// Import React With useState, useEffect from React.
import React, { useState, useEffect } from "react";

// Import NativeSelect, FormControl After Install the @material-ui/core.
import {NativeSelect, FormControl} from "@material-ui/core"

// Import Styles from CountryPicker.module.css.
import styles from "./CountryPicker.module.css"

// Import fetchCountries from Api file.
import { fetchCountries } from "../../api"

// Making The CountryPicker function component.
const CountryPicker = ({handleCountryChange}) =>{
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(()=>{
    const fetchAPI = async () =>{
      setFetchedCountries(await fetchCountries())

    }
    fetchAPI()
  }, [setFetchedCountries])

    // console.log(fetchedCountries)

  return(
    <FormControl className={styles.formControl}>

      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value) }>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>

    </FormControl>
  )
}

// Export CountryPicker
export default CountryPicker;