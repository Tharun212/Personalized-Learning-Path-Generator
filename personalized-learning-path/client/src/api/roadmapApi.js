import axios from "axios";

const API_URL = "http://localhost:5000";

export const getRoadmap = async () => {
  const response = await axios.get(`${API_URL}/roadmap`);
  return response.data;
};
