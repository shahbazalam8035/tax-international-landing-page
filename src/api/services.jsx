import axios from "axios";

export const API_BASE_URL = "https://api.avua.online";

export const messageRequest = async (userData) => {
  return axios
    .post(`${API_BASE_URL}/trx/external/v1/enquiry-form`, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log("Successful ", response);
      return response.data;
    })
    .catch((error) => {
      return error.response.data || error;
    });
};
