import axiosClient from './axios-client';

export const authAPI = {
	register(data) {
		return axiosClient.post('/auth/register', data);
	},

	login(data) {
		return axiosClient.post('/auth/login', data)
	},

	logout() {
		return axiosClient.post('/auth/logout');
	},

	forgottenPassword(data) {
		return axiosClient.post('/auth/forgottenPassword', data);
	},
};
