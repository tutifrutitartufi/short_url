import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL,
});

export const createUrl = (payload) => api.post(`/urls`, payload);
export const getAllUrls = () => api.get(`/urls`);
export const deleteUrlById = (id) => api.delete(`/urls/${id}`);
export const getUrlById = (id) => api.get(`/urls/${id}`);

const apis = {
  createUrl,
  getAllUrls,
  deleteUrlById,
  getUrlById,
};

export default apis;
