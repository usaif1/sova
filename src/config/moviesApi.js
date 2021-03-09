import axios from "axios";

export const movie = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apiKey: process.env.REACT_APP_API_KEY,
  },
});
