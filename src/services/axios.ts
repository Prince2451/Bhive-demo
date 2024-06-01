import axios from "axios";
// Should be from Env in real application
const BASE_URL = "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/"

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export {BASE_URL}
export default axiosInstance