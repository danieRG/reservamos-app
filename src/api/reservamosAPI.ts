import axios from "axios";

const reservamosApi = axios.create({
    baseURL: 'https://search.reservamos.mx/api/v2',
})

export default reservamosApi;