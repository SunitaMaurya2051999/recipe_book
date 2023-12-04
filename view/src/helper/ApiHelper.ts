import axios from "axios";
const callApiMethod = async (url: any, data: any) => {
  try {
    const response = await axios.post("http://localhost:5000" + url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default callApiMethod;