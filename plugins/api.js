/* ปฏิภาณ พาทำ */

import axios from '@nuxtjs/axios';

const productsAPI = 'https://dummyjson.com';

class Placeholder {
  constructor () {
    const baseURL = productsAPI;
    this.axios = axios.create ({
      baseURL,
      timeout: 1000,
    });
  }

  getProduct () {
    return this.axios.get ('/products');
  }
}
export default Placeholder;
