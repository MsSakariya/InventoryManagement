import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const getProducts = async () => {
  return await axios.get(API_URL);
};

export const createProduct = async (product) => {
  return await axios.post(API_URL, product);
};

export const deleteProduct = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};