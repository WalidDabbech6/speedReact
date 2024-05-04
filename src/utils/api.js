import axios from "axios";
import { objectToFormData } from "../helpers/ObjectToFormData";
import _ from "lodash";

const baseURL = "http://localhost:8000/api"; // Replace this with your actual API URL

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
		const response = await axiosInstance.post("/login", {...credentials});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const register = async (data) => {
	try {
		const response = await axiosInstance.post("/register", {..._.mapKeys(data, (value, key) => _.snakeCase(key))});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const verifyAccount = async (data) => {
	try {
		const response = await axiosInstance.post("/verify", {..._.mapKeys(data, (value, key) => _.snakeCase(key))});
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
		const response = await axiosInstance.patch("/updateProfile", payload,{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

export const bookRide = async (data) => {
	let headers = {};
	headers["Authorization"] = localStorage.getItem("token");

	try {
		const response = await axiosInstance.post("/bookings", _.mapKeys(data, (value, key) => _.snakeCase(key)),{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};


export const getPrice = async (data) => {
	try {
		const response = await axiosInstance.post("/rides", {...data});
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
		const response = await axiosInstance.get("/bookings",{headers:headers});
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
		const response = await axiosInstance.get(`/bookings/${orderId}/`,{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};



export const makePayment = async (data) => {
	let headers = {};
	headers["Authorization"] = localStorage.getItem("token");

	try {
		const response = await axiosInstance.post("/make-payment", _.mapKeys(data, (value, key) => _.snakeCase(key)),{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};


export const verifyPayment = async (paymentRef) => {
	let headers = {};
	headers["Authorization"] = localStorage.getItem("token");

	try {
		const response = await axiosInstance.get(`/verify-payment/${paymentRef}`,{headers:headers});
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
};

// Add more functions for other API endpoints as needed

export default axiosInstance;