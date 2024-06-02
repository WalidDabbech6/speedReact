import axios from "axios";
import { objectToFormData } from "../helpers/ObjectToFormData";
import _ from "lodash";
import {getEnv} from "../helpers/EnvHelpers"

const baseURL = getEnv("BASE_URL")

const axiosInstance = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});


axiosInstance.interceptors.response.use(
	response => {
	  // If response is OK, return it
	  return response;
	},
	error => {
	  // If response status is 401, logout
	  if (error.response && error.response.status === 401) {
		window.location.href='/logout' // Call your logout function
	  }
	  // Pass the error along
	  return Promise.reject(error);
	}
  );

// Define functions to make specific API requests
export const login = async (credentials) => {
	try {
		const response = await axiosInstance.post("api/login", {...credentials});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const register = async (data) => {
	try {
		const response = await axiosInstance.post("api/register", {..._.mapKeys(data, (value, key) => _.snakeCase(key))});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const verifyAccount = async (data) => {
	try {
		const response = await axiosInstance.post("api/verify", {..._.mapKeys(data, (value, key) => _.snakeCase(key))});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};


export const updateProfile = async (data) => {
	let headers = {};
	headers["Content-Type"] = "multipart/form-data";
	headers["Authorization"] = localStorage.getItem("token");

	let payload = objectToFormData(_.mapKeys(data, (value, key) => _.snakeCase(key)));
	try {
		const response = await axiosInstance.patch("api/updateProfile", payload,{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const bookRide = async (data) => {
	let headers = {};
	headers["Authorization"] = localStorage.getItem("token");

	try {
		const response = await axiosInstance.post("api/bookings", _.mapKeys(data, (value, key) => _.snakeCase(key)),{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};


export const getPrice = async (data) => {
	try {
		const response = await axiosInstance.post("api/rides", {...data});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};


export const getBookingHistory = async () => {
	let headers = {};
	headers["Content-Type"] = "multipart/form-data";
	headers["Authorization"] = localStorage.getItem("token");

	try {
		const response = await axiosInstance.get("api/bookings",{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};


export const getBookingOrder = async (orderId) => {
	let headers = {};
	headers["Content-Type"] = "multipart/form-data";
	headers["Authorization"] = localStorage.getItem("token");

	try {
		const response = await axiosInstance.get(`api/bookings/${orderId}/`,{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};



export const makePayment = async (data) => {
	let headers = {};
	headers["Authorization"] = localStorage.getItem("token");

	try {
		const response = await axiosInstance.post("api/make-payment", _.mapKeys(data, (value, key) => _.snakeCase(key)),{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};


export const verifyPayment = async (paymentRef) => {
	let headers = {};
	headers["Authorization"] = localStorage.getItem("token");

	try {
		const response = await axiosInstance.get(`api/verify-payment/${paymentRef}`,{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

// Add more functions for other API endpoints as needed

export default axiosInstance;