import axios from 'axios'

// set Api Path ที่จะดึงมาใช้
const baseURL = 'https://jsonplaceholder.typicode.com'
const url = 'https://jsonplaceholder.typicode.com'

function createInstance() {
  const instance = axios.create({
    baseURL,
    // กำหนดเวลาเรียก Api
    timeout: 4000, 
  })
  return instance
}
export default class BaseApi {
  static api = createInstance()
  static url = url
}