import axios from "axios";

const api = axios.create({
    baseURL: 'https://testapi.io/api/redealumni/scholarships'
});

export default api;