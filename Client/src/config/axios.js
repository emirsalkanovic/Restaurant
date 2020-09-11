import axios from 'axios';
// import { API_PRODUCTION_URL, API_DEVELOPMENT_URL } from 'react-native-dotenv';

// Global Axios Config
export const axiosInstance = axios.create({
	// baseURL: API_PRODUCTION_URL,
	// inet 192.168.100.7 netmask 0xffffff00 broadcast 192.168.100.255
	baseURL: 'http://192.168.100.7:3000',
	// baseURL: 'http://localhost:3000',
  headers: { name: 'Content-Type', value: 'application/json' }
});

// Axios Request Interceptor
export const AxiosInterceptors = {
	responseInterceptor() {
		axiosInstance.interceptors.response.use(
			(response) => {
				return response;
			},
			(error) => {
				if (error.response.status === 401) {
					// localStorage.removeItem('JWT_TOKEN_KEY');
					// navigate to login screen here
				}
				return Promise.reject(error);
			}
		);
	}
};