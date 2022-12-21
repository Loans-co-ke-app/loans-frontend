/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/naming-convention
const BASE_URL = 'https://loans-ke-backend.herokuapp.com/api/loan';
// const BASE_URL = 'https://loans-backend-beta.herokuapp.com/api/loan';
const TRACKING_ID = import.meta.env.VITE_TRACKING_ID as string// as const

import axios from 'axios';

const axiosQuery = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
});

export {
	axiosQuery, BASE_URL
	, TRACKING_ID
};

export default Object.freeze({
	axiosQuery, BASE_URL, TRACKING_ID
});
