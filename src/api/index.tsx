// eslint-disable-next-line @typescript-eslint/naming-convention
const BASE_URL = 'https://loans-backend-beta.herokuapp.com/api/loan';

import axios from 'axios';

const axiosQuery = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
});

export {
	axiosQuery, BASE_URL
};

export default Object.freeze({
	axiosQuery, BASE_URL
});