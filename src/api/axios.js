import axios from "axios";
const BASE_URL = "https://ab-movies-backend.onrender.com/";
export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
});
