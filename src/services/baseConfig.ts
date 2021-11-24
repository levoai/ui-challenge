import axios from 'axios' 
import { BASE_API_URL } from '../utils/constants'


const service = axios.create({
  baseURL: BASE_API_URL
})


export default service