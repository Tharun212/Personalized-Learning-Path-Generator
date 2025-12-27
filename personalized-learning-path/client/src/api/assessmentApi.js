import axios from "axios";

const API_URL = "http://localhost:5000/assessment";

// POST assessment (quiz result)
export const saveAssessment = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

// GET all assessments (dashboard)
export const getAssessments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
