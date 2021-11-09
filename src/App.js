// Importing the React From Reat.
import React from "react";

// Importing All Cards, Chart, CountryPicker from components Folder.
import { Cards, Chart, CountryPicker } from "./components";

// Imporying styles from App.module.css file.
import styles from "./App.module.css";

// Importing from api folder in index.js file.
import { fetchData } from "./api";

// Importing coronaImage from images folder.
import coronaImage from "./images/image.png";

// This is ClassBase Component.
class App extends React.Component {
	state = {
		data: {},
		country: "",
	};

	// Here fetchData from Api.
	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		this.setState({ data: fetchedData, country: country });
	};

	// Render The classbase function in reactDom.
	render() {
		const { data, country } = this.state;

		//Return The Value.
		return (
			<div className={styles.countainer}>
				<img
					className={styles.iamge}
					src={coronaImage}
					alt="COVID-19"
				/>
				<Cards data={data} />
				<CountryPicker
					handleCountryChange={
						this.handleCountryChange
					}
				/>
				<Chart data={data} country={country} />
			</div>
		);
	}
}

// Export Classbase function App.
export default App;

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
