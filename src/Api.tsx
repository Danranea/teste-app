import axios from "axios";

const api = axios.create({
    baseURL: 'https://testapi.io/api/Jonas-buriti/scholarships'
});

export default api;