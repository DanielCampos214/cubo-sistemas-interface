import axios from 'axios'

 const apiCubo = axios.create({
    baseURL:'http://localhost:3004'
})
export default apiCubo