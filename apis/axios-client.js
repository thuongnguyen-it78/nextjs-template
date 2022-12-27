import axios from 'axios';

const axiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});






axiosClient.interceptors.request.use(
	function (config) {
		const token = ''; // @thuong getAccessToken
		if (token) {
			config.headers.common['Authorization'] = 'Bearer ' + token;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default axiosClient;
