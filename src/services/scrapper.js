import axios from 'axios';

const scrapeCompany = async (company) => {
	try {
		const response = await axios.get('scraper/' + company);
		if (response.status === 200)
			return response.data
		return false;
	} catch (error) {
		console.error(error);
		return false;
	}
}

const scrapSearch = async (search) => {
	try {
		const response = await axios.get('scraper?company=' + search);
		if (response.status === 200)
			return response.data
		return false;
	} catch (error) {
		console.error(error);
		return false;
	}
}
export { scrapeCompany, scrapSearch };
