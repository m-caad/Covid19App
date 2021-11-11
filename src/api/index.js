// Importing The axios for the Api.
import axios from "axios";

// Store the Api url in Variable.
const url = "https://covid19.mathdro.id/ap";

// Exporting the fetchData.
export const fetchData = async (country) => {
	let changeableUrl = url;
	if (country) {
		changeableUrl = `${url}/countries/${country}`;
	}

	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeableUrl);

		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		console.log(error);
	}
};

// Export fetchDailyData Which provide confirmed deaths reportDate from Api.
export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);
		console.log(data);

		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		// console.log(modifiedData);
		return modifiedData;
	} catch (error) {
		console.log(error);
	}
};

// Exporting fetchCountries from Api and Lopping on countires.
export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name);

		// console.log(`Hi`, response);
	} catch (error) {
		console.log(error);
	}
};
