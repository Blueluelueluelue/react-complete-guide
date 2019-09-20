import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://coral-sanctuary-199408.firebaseio.com/'
});

export default axiosInstance;